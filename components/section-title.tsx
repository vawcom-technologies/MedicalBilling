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
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            {align === "center" ? (
              <span
                className="h-px w-6 bg-gradient-to-r from-transparent to-accent"
                aria-hidden="true"
              />
            ) : (
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
            )}
            {eyebrow}
            {align === "center" ? (
              <span
                className="h-px w-6 bg-gradient-to-l from-transparent to-accent"
                aria-hidden="true"
              />
            ) : null}
          </p>
        </div>
      ) : null}
      <Heading
        className={cn(
          "font-display text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.85rem] lg:leading-[1.12]",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
