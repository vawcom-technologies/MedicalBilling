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
  FileText:
    "bg-gradient-to-br from-primary to-[#0a365c] text-white shadow-[0_12px_28px_rgba(15,76,129,0.28)]",
  BadgeCheck:
    "bg-gradient-to-br from-secondary to-highlight text-white shadow-[0_12px_28px_rgba(74,168,255,0.32)]",
  Headset:
    "bg-gradient-to-br from-accent to-[#169e92] text-white shadow-[0_12px_28px_rgba(42,212,196,0.32)]",
  Globe:
    "bg-gradient-to-br from-[#5b6cff] to-[#7c4dff] text-white shadow-[0_12px_28px_rgba(91,108,255,0.32)]",
  Megaphone:
    "bg-gradient-to-br from-spark to-[#e0a21a] text-white shadow-[0_12px_28px_rgba(243,193,75,0.38)]",
  Search:
    "bg-gradient-to-br from-[#ff7a59] to-[#f06292] text-white shadow-[0_12px_28px_rgba(255,122,89,0.32)]",
  ClipboardList:
    "bg-gradient-to-br from-[#0ea5e9] to-[#2563eb] text-white shadow-[0_12px_28px_rgba(14,165,233,0.32)]",
};

const fallbackIconStyle =
  "bg-gradient-to-br from-primary to-secondary text-white shadow-[0_12px_28px_rgba(15,76,129,0.22)]";

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
    <section className="section-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title={title}
          description={description}
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FileText;
            const iconClass = iconStyles[service.icon] ?? fallbackIconStyle;
            return (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="glass group flex h-full flex-col rounded-[1.5rem] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_20px_50px_rgba(42,212,196,0.14)] md:p-8"
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${iconClass}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
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
