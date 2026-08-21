import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  Globe,
  Headset,
  Megaphone,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const icons: Record<string, LucideIcon> = {
  FileText,
  BadgeCheck,
  ClipboardList,
  Headset,
  Megaphone,
  Globe,
  Search,
};

const iconStyles: Record<string, string> = {
  FileText: "bg-primary text-white",
  BadgeCheck: "bg-secondary text-white",
  Headset: "bg-accent text-white",
  Globe: "bg-[#4f6bed] text-white",
  Megaphone: "bg-spark text-ink",
  Search: "bg-[#e07a5f] text-white",
  ClipboardList: "bg-highlight text-white",
};

const fallbackIconStyle = "bg-primary text-white";

type Service = {
  title: string;
  href: string;
  description: string;
  icon: string;
};

export function ServiceCards({
  title,
  description,
  services,
}: {
  title: string;
  description?: string;
  services: readonly Service[] | Service[];
}) {
  return (
    <section className="section-alt py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title={title}
          description={description}
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FileText;
            const iconClass = iconStyles[service.icon] ?? fallbackIconStyle;
            return (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="surface-panel group flex h-full flex-col rounded-[1.25rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_48px_rgba(10,46,43,0.1)]"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${iconClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-7 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
                    {service.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
