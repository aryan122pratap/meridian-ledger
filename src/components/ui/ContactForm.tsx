"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "border border-rule bg-paper px-4 py-3 text-16 text-ink focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", siteConfig.contact.web3formsAccessKey);
    data.append("subject", `New inquiry from ${siteConfig.name} website`);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-18 text-ink">
        Thanks, that&apos;s on its way to us. We typically respond within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <label className="flex flex-col gap-2">
        <span className="text-16 text-ink">Name</span>
        <input type="text" name="name" required className={inputStyles} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-16 text-ink">Email</span>
        <input type="email" name="email" required className={inputStyles} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-16 text-ink">Phone (optional)</span>
        <input type="tel" name="phone" className={inputStyles} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-16 text-ink">What do you need help with?</span>
        <textarea name="message" required rows={5} className={inputStyles} />
      </label>

      {/* Web3Forms honeypot convention: a hidden checkbox that should stay unchecked. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Button type="submit" variant="primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>

      {status === "error" ? (
        <p className="text-14 text-correction">
          Something went wrong sending that. Try again, or email us directly at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-4">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
