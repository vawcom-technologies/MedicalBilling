import Link from "next/link";
import { aboutContent } from "@/lib/content/about";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceArt } from "@/components/illustrations/service-art";
import { HeroStatsOverlay } from "@/components/sections/hero-stats-overlay";
import { BenefitGrid } from "@/components/sections/benefit-grid";
import { Timeline } from "@/components/sections/timeline";
import { StatsSection } from "@/components/sections/stats-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import { Award, BadgeCheck, Eye, FileText, Headset, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const teamIcons: Record<string, LucideIcon> = {
  "Revenue Cycle Leadership": FileText,
  "Credentialing Specialists": BadgeCheck,
  "Virtual Front Desk Team": Headset,
};

export const metadata = buildMetadata({
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
  path: "/about",
  keywords: [...aboutContent.seo.keywords],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <JsonLd data={faqSchema([...aboutContent.faqs])} />

      <PageHero
        breadcrumb="About"
        eyebrow="Medical Billing Company"
        h1={aboutContent.hero.h1}
        subheadline={aboutContent.hero.subheadline}
        primaryCta={aboutContent.hero.primaryCta}
        secondaryCta={aboutContent.hero.secondaryCta}
        secondaryHref="#mission"
      >
        <HeroStatsOverlay
          stats={[
            { label: "Providers Served", value: "250+", tone: "primary" },
            { label: "Collection Increase", value: "28%", tone: "accent" },
            { label: "Denial Reduction", value: "40%", tone: "secondary" },
          ]}
        >
          <ServiceArt
            variant="about"
            className="h-auto w-full drop-shadow-[0_24px_50px_rgba(15,76,129,0.12)]"
          />
        </HeroStatsOverlay>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {aboutContent.story}
            </p>
          </FadeIn>
        </Container>
      </section>

      <StatsSection
        stats={aboutContent.stats.map((stat) => ({
          value: stat.value,
          label: stat.label,
        }))}
        title="Results That Build Trust"
        description="Update these figures in lib/site-config.ts with your verified practice metrics."
        variant="brand"
      />

      <section id="mission" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="glass h-full rounded-[1.75rem] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-foreground">
                  {aboutContent.mission.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {aboutContent.mission.description}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="glass h-full rounded-[1.75rem] p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                  <Eye className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-bold text-foreground">
                  {aboutContent.vision.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {aboutContent.vision.description}
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="section-alt py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Values"
            title={aboutContent.values.title}
            description="The principles that guide every billing, credentialing, and front-desk engagement."
          />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutContent.values.items.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass h-full rounded-[1.5rem] p-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <BenefitGrid
        eyebrow="Partnership"
        title={aboutContent.whyPartner.title}
        items={aboutContent.whyPartner.items}
      />

      <Timeline
        eyebrow="Our Story"
        title="Company Timeline"
        description="A medical billing company that expanded into a full RCM partner stack."
        steps={aboutContent.timeline}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Team"
            title="Specialists Across the Revenue Cycle"
            description="Meet the functional teams behind billing accuracy, enrollment speed, and patient experience."
          />
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {aboutContent.team.map((member) => {
              const Icon = teamIcons[member.name] ?? FileText;
              return (
                <StaggerItem key={member.name}>
                  <div className="glass h-full rounded-[1.5rem] p-7">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_10px_24px_rgba(15,76,129,0.22)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-secondary">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {member.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionTitle
              align="left"
              eyebrow="Standards"
              title={aboutContent.certifications.title}
              description={aboutContent.certifications.description}
            />
            <Stagger className="grid auto-rows-fr gap-3 sm:grid-cols-2">
              {aboutContent.certifications.items.map((item) => (
                <StaggerItem key={item} className="h-full">
                  <div className="glass flex h-full min-h-[4.75rem] w-full items-center gap-3 rounded-2xl px-4 py-4">
                    <Award
                      className="h-5 w-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <h3 className="text-sm font-semibold leading-snug text-foreground">
                      {item}
                    </h3>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <FadeIn className="mt-10 text-center text-sm text-muted">
            Ready to partner?{" "}
            <Link
              href="/contact"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Contact our medical billing company
            </Link>{" "}
            to schedule a consultation.
          </FadeIn>
        </Container>
      </section>

      <FaqSection faqs={aboutContent.faqs} />

      <CtaBanner
        title={aboutContent.finalCta.title}
        description={aboutContent.finalCta.description}
        cta={aboutContent.finalCta.cta}
      />
    </>
  );
}
