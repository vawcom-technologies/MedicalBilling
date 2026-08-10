import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className,
  titleClassName,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <FadeIn
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
