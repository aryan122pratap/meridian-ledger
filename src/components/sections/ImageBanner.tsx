import type { ReactNode } from "react";
import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";

type ImageBannerProps = {
  image: string;
  eyebrow?: string;
  heading: ReactNode;
  body?: ReactNode;
};

export function ImageBanner({ image, eyebrow, heading, body }: ImageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-rule">
      <div className="absolute inset-0 -z-10">
        <DuotoneImage src={image} alt="" sizes="100vw" className="h-full w-full" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55" />
      <div className="mx-auto max-w-6xl px-6 py-ledger-3 sm:px-12">
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow ? <p className="font-display text-16 font-medium text-paper/80">{eyebrow}</p> : null}
            <h1 className="mt-4 font-display text-38 font-medium text-paper">{heading}</h1>
            {body ? <div className="mt-6 text-18 text-paper/85">{body}</div> : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
