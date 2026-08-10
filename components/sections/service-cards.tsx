import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const icons: Record<string, LucideIcon> = {
  FileText,
  BadgeCheck,
  Headset,
};

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
          eyebrow="Our Core Services"
          title={title}
          description={description}
        />
        <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FileText;
            return (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="glass group flex h-full flex-col rounded-[1.5rem] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/30 hover:shadow-[0_20px_50px_rgba(15,76,129,0.12)] md:p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_12px_28px_rgba(15,76,129,0.22)] transition-transform duration-300 group-hover:scale-105">
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
