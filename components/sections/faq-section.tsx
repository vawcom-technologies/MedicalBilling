import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";

type Faq = { question: string; answer: string };

type FaqSectionProps = {
  title?: string;
  description?: string;
  faqs: readonly Faq[] | Faq[];
  eyebrow?: string;
};

export function FaqSection({
  title = "Frequently Asked Questions",
  description = "Answers to common questions about our medical billing, credentialing, and virtual front desk services.",
  faqs,
  eyebrow = "FAQ",
}: FaqSectionProps) {
  return (
    <section className="section-alt py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <FadeIn delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </section>
  );
}
