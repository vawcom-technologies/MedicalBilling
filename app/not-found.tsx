import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="hero-gradient flex min-h-[70vh] items-center py-28">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Explore our medical billing services or return home.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
