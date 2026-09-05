import { chromium } from "playwright";
import { spawn, execSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const screenshotsDir = path.join(projectRoot, ".screenshots");
const port = 3000;
const baseUrl = `http://localhost:${port}`;

const viewports = [
  { label: "1440", width: 1440, height: 900 },
  { label: "390", width: 390, height: 844 },
];

function freeExistingPort() {
  if (process.platform !== "win32") return;
  try {
    const output = execSync(`netstat -ano | findstr :${port}`).toString();
    const pids = new Set(
      output
        .split("\n")
        .filter((line) => line.includes("LISTENING"))
        .map((line) => line.trim().split(/\s+/).pop()),
    );
    for (const pid of pids) {
      if (pid && /^\d+$/.test(pid)) {
        try {
          execSync(`taskkill /PID ${pid} /T /F`);
          console.log(`Freed port ${port} (killed existing PID ${pid})`);
        } catch {
          // already gone
        }
      }
    }
  } catch {
    // nothing listening on the port, fine
  }
}

function killServerTree(pid) {
  if (!pid) return;
  try {
    if (process.platform === "win32") {
      execSync(`taskkill /PID ${pid} /T /F`);
    } else {
      process.kill(-pid, "SIGTERM");
    }
  } catch (err) {
    console.error("Failed to stop dev server tree:", err.message);
  }
}

function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = async () => {
      try {
        const res = await fetch(url);
        if (res.status < 500) {
          resolve();
          return;
        }
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Dev server did not become ready within ${timeoutMs}ms`));
        return;
      }
      setTimeout(check, 500);
    };
    check();
  });
}

async function getRoutesFromSitemap() {
  const res = await fetch(`${baseUrl}/sitemap.xml`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => new URL(m[1]).pathname);
}

function routeToFilename(route) {
  if (route === "/") return "home";
  return route.replace(/^\//, "").replace(/\//g, "_");
}

async function main() {
  await mkdir(screenshotsDir, { recursive: true });

  freeExistingPort();

  console.log("Starting dev server...");
  const server = spawn("npm", ["run", "dev"], {
    cwd: projectRoot,
    shell: true,
  });
  server.stdout.on("data", (d) => process.stdout.write(`[dev] ${d}`));
  server.stderr.on("data", (d) => process.stderr.write(`[dev] ${d}`));

  try {
    await waitForServer(baseUrl);
    console.log("Dev server is ready.");

    const routes = await getRoutesFromSitemap();
    console.log(`Found ${routes.length} routes in sitemap.`);

    const browser = await chromium.launch();

    for (const route of routes) {
      const page = await browser.newPage();
      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle", timeout: 60000 });
        await page.waitForTimeout(1000);
        const filename = `${routeToFilename(route)}-${viewport.label}.png`;
        await page.screenshot({ path: path.join(screenshotsDir, filename), fullPage: true });
        console.log(`Saved ${filename}`);
      }
      await page.close();
    }

    await browser.close();
    console.log("Done.");
  } finally {
    console.log("Stopping dev server...");
    killServerTree(server.pid);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
