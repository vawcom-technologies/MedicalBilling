"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="flex flex-col gap-2 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 border-white/15 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-accent"
      />
      <Button
        type="submit"
        size="sm"
        className="h-11 shrink-0 bg-accent px-5 text-ink hover:bg-accent/90 hover:text-ink"
      >
        {submitted ? "Joined" : "Subscribe"}
      </Button>
    </form>
  );
}
