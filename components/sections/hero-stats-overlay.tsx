type HeroStat = {
  label: string;
  value: string;
  tone?: "primary" | "secondary" | "accent";
};

const toneClass = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
} as const;

type HeroStatsOverlayProps = {
  children: React.ReactNode;
  stats: [HeroStat, HeroStat, HeroStat?];
};

function StatCard({
  stat,
  className,
}: {
  stat: HeroStat;
  className?: string;
}) {
  return (
    <div
      className={`glass-strong rounded-2xl px-3.5 py-2.5 ${className ?? ""}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
        {stat.label}
      </p>
      <p
        className={`mt-1 text-xl font-bold leading-none ${toneClass[stat.tone ?? "primary"]}`}
      >
        {stat.value}
      </p>
    </div>
  );
}

export function HeroStatsOverlay({ children, stats }: HeroStatsOverlayProps) {
  const [one, two, three] = stats;
  const all = [one, two, three].filter(Boolean) as HeroStat[];

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Art stays clean: no overlays on top of it */}
      <div className="overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_rgba(15,76,129,0.1)]">
        {children}
      </div>

      {/* Desktop: neat floating cards around the frame, never stacked on each other */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <StatCard
          stat={one}
          className="pointer-events-auto absolute -top-4 right-3 w-[150px] lg:-top-5 lg:right-0"
        />
        <StatCard
          stat={two}
          className="pointer-events-auto absolute -bottom-4 left-3 w-[150px] lg:-bottom-5 lg:left-0"
        />
        {three ? (
          <StatCard
            stat={three}
            className="pointer-events-auto absolute bottom-[28%] -right-3 w-[150px] lg:-right-4"
          />
        ) : null}
      </div>

      {/* Mobile + tablet fallback: clean equal pills under the art */}
      <div className="mt-5 grid grid-cols-3 gap-2 md:mt-8 md:hidden">
        {all.map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-2xl px-2 py-3 text-center"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted">
              {stat.label}
            </p>
            <p
              className={`mt-1 text-base font-bold ${toneClass[stat.tone ?? "primary"]}`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop spacer so bottom floating card doesn't collide with next section */}
      <div className="hidden h-6 md:block" aria-hidden="true" />
    </div>
  );
}

type HeroStatsRowProps = {
  stats: HeroStat[];
};

/** For pages without a side illustration (Contact, Calculator) */
export function HeroStatsRow({ stats }: HeroStatsRowProps) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="glass-strong min-w-[140px] rounded-2xl px-4 py-3 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            {stat.label}
          </p>
          <p
            className={`mt-1 text-xl font-bold ${toneClass[stat.tone ?? "primary"]}`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
