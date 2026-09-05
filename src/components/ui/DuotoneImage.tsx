import Image from "next/image";

type DuotoneImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Slight zoom + easing back the duotone on hover, letting real color peek through. */
  interactive?: boolean;
};

export function DuotoneImage({ src, alt, sizes, priority, className, interactive = false }: DuotoneImageProps) {
  return (
    <div
      className={["relative overflow-hidden bg-ink", interactive ? "group" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={[
          "object-cover grayscale contrast-[1.08]",
          interactive ? "transition-transform duration-500 ease-out group-hover:scale-110" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        aria-hidden="true"
        className={[
          "duotone-overlay absolute inset-0 opacity-[0.92]",
          interactive ? "transition-opacity duration-500 ease-out group-hover:opacity-[0.65]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}
