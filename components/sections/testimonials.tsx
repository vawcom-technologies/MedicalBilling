"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import { useCallback } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonials({
  items,
}: {
  items: readonly Testimonial[] | Testimonial[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5200, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            align="left"
            eyebrow="Testimonials"
            title="Trusted by Healthcare Providers"
            description="Practices choose us for medical billing services, credentialing, and virtual front desk support that deliver measurable results."
            className="md:max-w-xl"
          />
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              Prev
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              Next
            </Button>
          </div>
        </div>

        <FadeIn className="mt-10 overflow-hidden" delay={0.1}>
          <div ref={emblaRef}>
            <div className="flex">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 shrink-0 grow-0 basis-full pr-4 md:basis-1/2 lg:basis-[45%]"
                >
                  <figure className="gradient-border flex h-full flex-col rounded-[1.5rem] p-7 shadow-[0_12px_40px_rgba(15,76,129,0.06)] md:p-8">
                    <Quote
                      className="h-8 w-8 text-accent"
                      aria-hidden="true"
                    />
                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground md:text-lg">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-4">
                      <p className="font-semibold text-primary">{item.name}</p>
                      <p className="text-sm text-muted">{item.role}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
