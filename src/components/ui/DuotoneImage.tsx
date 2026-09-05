import Image from "next/image";

type DuotoneImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function DuotoneImage({ src, alt, sizes, priority, className }: DuotoneImageProps) {
  return (
    <div className={["relative overflow-hidden bg-ink", className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover grayscale contrast-[1.08]"
      />
      <div aria-hidden="true" className="duotone-overlay absolute inset-0" style={{ opacity: 0.92 }} />
    </div>
  );
}
