import { DuotoneImage } from "@/components/ui/DuotoneImage";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { RevealText } from "@/components/motion/RevealText";

export function ApproachBand() {
  return (
    <section className="relative isolate overflow-hidden border-b border-rule">
      <div className="absolute inset-0 -z-10">
        <DuotoneImage
          src="/images/services/cfo-advisory.jpg"
          alt=""
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55" />
      <Spotlight className="mx-auto max-w-6xl px-6 py-ledger-3 sm:px-12">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-16 font-medium text-paper/80">Why monthly, not annual</p>
            <h2 className="mt-4 font-display text-38 font-medium text-paper">
              <RevealText text="A tax return is just the last page of a story your books already told." />
            </h2>
            <p className="mt-6 text-18 text-paper/85">
              Most firms meet you in March. We&apos;d rather have already seen the problem in July,
              when there&apos;s still a quarter left to do something about it. That&apos;s the
              entire case for monthly bookkeeping and quarterly planning: not more paperwork, just
              paperwork that arrives early enough to matter.
            </p>
          </div>
        </Reveal>
      </Spotlight>
    </section>
  );
}
