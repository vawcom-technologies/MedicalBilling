import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-[transform,box-shadow,background-color,color,border-color,filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary via-[#1460a0] to-secondary text-white shadow-[0_10px_30px_rgba(15,76,129,0.28),0_0_0_1px_rgba(74,168,255,0.12)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_36px_rgba(30,136,229,0.32)]",
        secondary:
          "bg-secondary text-white shadow-[0_10px_30px_rgba(74,168,255,0.32)] hover:-translate-y-0.5 hover:brightness-110",
        accent:
          "bg-accent text-white shadow-[0_10px_30px_rgba(42,212,196,0.34)] hover:-translate-y-0.5 hover:brightness-110",
        outline:
          "glass text-primary hover:-translate-y-0.5 hover:border-accent/45",
        ghost: "text-primary hover:bg-primary/5",
        link: "rounded-none text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
