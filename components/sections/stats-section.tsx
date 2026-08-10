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
          ? "bg-primary py-16 text-white md:py-20"
          : "section-surface border-y py-16 md:py-20"
      }
    >
      <Container>
        {(title || description) && (
          <FadeIn className="mx-auto mb-10 max-w-2xl text-center">
            {title ? (
              <h2
                className={`text-2xl font-bold md:text-3xl ${brand ? "text-white" : "text-foreground"}`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`mt-3 text-sm md:text-base ${brand ? "text-white/80" : "text-muted"}`}
              >
                {description}
              </p>
            ) : null}
          </FadeIn>
        )}
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div
                className={`rounded-[1.5rem] p-6 text-center ${
                  brand
                    ? "border border-white/20 bg-white/10 backdrop-blur-md"
                    : "glass"
                }`}
              >
                <div
                  className={`text-3xl font-bold tracking-tight md:text-4xl ${
                    brand ? "text-white" : "text-primary"
                  }`}
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
                  className={`mt-2 text-sm font-medium ${brand ? "text-white/75" : "text-muted"}`}
                >
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
