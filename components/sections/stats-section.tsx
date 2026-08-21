import { Container } from "@/components/ui/container";
import { AnimatedCounter } from "@/components/animated-counter";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";

type Stat =
  | { value: number; suffix?: string; prefix?: string; label: string }
  | { value: string; label: string };

type StatsSectionProps = {
  stats: readonly Stat[] | Stat[];
  title?: string;
  description?: string;
  variant?: "light" | "brand";
};

export function StatsSection({
  stats,
  title,
  description,
  variant = "light",
}: StatsSectionProps) {
  const brand = variant === "brand";

  return (
    <section
      className={
        brand
          ? "section-ink relative overflow-hidden py-20 md:py-24"
          : "section-surface border-y py-20 md:py-24"
      }
    >
      {brand ? (
        <>
          <div
            className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-spark/15 blur-3xl"
            aria-hidden="true"
          />
        </>
      ) : null}
      <Container className="relative">
        {(title || description) && (
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            {title ? (
              <h2
                className={`font-display text-2xl font-semibold md:text-3xl ${brand ? "text-white" : "text-foreground"}`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`mt-3 text-sm md:text-base ${brand ? "text-white/70" : "text-muted"}`}
              >
                {description}
              </p>
            ) : null}
          </FadeIn>
        )}
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const numberClass = brand ? "text-white" : "text-primary";
            return (
              <StaggerItem key={stat.label}>
                <div
                  className={`rounded-[1.25rem] p-7 text-center ${
                    brand
                      ? "border border-white/12 bg-white/8 backdrop-blur-md"
                      : "surface-panel"
                  }`}
                >
                  <div
                    className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${numberClass}`}
                  >
                    {typeof stat.value === "number" ? (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={"suffix" in stat ? stat.suffix : ""}
                        prefix={"prefix" in stat ? stat.prefix : ""}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm font-medium ${brand ? "text-white/65" : "text-muted"}`}
                  >
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
