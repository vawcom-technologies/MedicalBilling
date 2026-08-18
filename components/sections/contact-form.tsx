"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactContent } from "@/lib/content/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  practiceName: z.string().min(2, "Please enter your practice name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Please share a bit more detail"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      practiceName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSuccess(true);
    reset();
  };

  return (
    <div className="gradient-border rounded-[1.75rem] p-6 md:p-8">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-foreground">
              Message received
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Thank you. A specialist will review your inquiry and respond
              within one business day.
            </p>
            <Button
              type="button"
              className="mt-6"
              variant="outline"
              onClick={() => setSuccess(false)}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name"
                label="Name"
                error={errors.name?.message}
              >
                <Input
                  id="name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
              </Field>
              <Field
                id="practiceName"
                label="Practice Name"
                error={errors.practiceName?.message}
              >
                <Input
                  id="practiceName"
                  aria-invalid={!!errors.practiceName}
                  {...register("practiceName")}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label="Email" error={errors.email?.message}>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
              </Field>
              <Field id="phone" label="Phone" error={errors.phone?.message}>
                <Input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                />
              </Field>
            </div>

            <Field
              id="service"
              label="Service Interested In"
              error={errors.service?.message}
            >
              <select
                id="service"
                className="glass-strong flex h-12 w-full rounded-2xl px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
                aria-invalid={!!errors.service}
                defaultValue=""
                {...register("service")}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {contactContent.services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </Field>

            <Field id="message" label="Message" error={errors.message?.message}>
              <Textarea
                id="message"
                aria-invalid={!!errors.message}
                {...register("message")}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending...
                </>
              ) : (
                "Schedule a Free Consultation"
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p className="text-xs font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
