"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5200, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [isDragging, setIsDragging] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => setIsDragging(true);
    const onPointerUp = () => setIsDragging(false);

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28">
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
              className="h-10 w-10 rounded-full p-0"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full p-0"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <FadeIn className="mt-10" delay={0.1}>
          <div
            ref={emblaRef}
            className={cn(
              // Extra room so hover lift + glow are not clipped by overflow-hidden
              "overflow-hidden px-2 py-8",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
          >
            <div className="flex touch-pan-y">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 shrink-0 grow-0 basis-full pr-4 md:basis-1/2 lg:basis-[45%]"
                >
                  <figure
                    className={cn(
                      "gradient-border flex h-full flex-col rounded-[1.5rem] p-7 md:p-8",
                      "bg-white/70 shadow-[0_12px_40px_rgba(15,76,129,0.08)]",
                      "transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "will-change-transform",
                      "hover:-translate-y-2 hover:bg-white",
                      "hover:shadow-[0_22px_56px_rgba(15,76,129,0.18),0_0_0_1px_rgba(46,196,182,0.35),0_0_36px_rgba(46,196,182,0.45),0_0_64px_rgba(30,136,229,0.28)]"
                    )}
                  >
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
