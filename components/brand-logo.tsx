import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Accessible label; decorative when empty and parent has aria-label */
  alt?: string;
  priority?: boolean;
};

/**
 * MedSol wordmark (M + cyan plus). Transparent PNG for light surfaces.
 */
export function BrandLogo({
  className,
  alt = "MedSol",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={485}
      height={439}
      priority={priority}
      className={cn("h-full w-full object-contain", className)}
    />
  );
}
