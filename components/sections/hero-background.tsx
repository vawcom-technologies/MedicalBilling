import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
  /** Darker left-side fade for text-heavy layouts */
  intensity?: "soft" | "strong";
};

/**
 * Clear photo inside an enclosed hero, with a dark faded overlay
 * so imagery stays readable and copy has strong contrast.
 */
export function HeroBackground({
  src,
  alt,
  intensity = "soft",
}: HeroBackgroundProps) {
  const veil =
    intensity === "strong"
      ? "from-black/72 via-black/58 to-black/48"
      : "from-black/68 via-black/52 to-black/42";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="scale-[1.02] object-cover object-center"
      />
      {/* Dark faded veil — photo stays clear underneath */}
      <div className={`absolute inset-0 bg-gradient-to-br ${veil}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_15%_40%,rgba(12,92,86,0.28),transparent_60%),radial-gradient(ellipse_55%_50%_at_90%_20%,rgba(26,127,196,0.18),transparent_55%)]" />
    </div>
  );
}
