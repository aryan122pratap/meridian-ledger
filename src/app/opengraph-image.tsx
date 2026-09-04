import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F6F5F1",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#0E1F2B", fontFamily: "Georgia, serif" }}>
          {siteConfig.shortName}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", width: 120, height: 4, backgroundColor: "#1C5C48" }} />
          <div
            style={{
              display: "flex",
              fontSize: 64,
              color: "#0E1F2B",
              maxWidth: 920,
              fontFamily: "Georgia, serif",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#5A6672", fontFamily: "Arial, sans-serif" }}>
            Bookkeeping, tax preparation &amp; planning
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
