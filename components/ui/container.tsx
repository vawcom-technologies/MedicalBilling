import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  ref,
  ...props
}: ContainerProps) {
  return (
    <Tag
      ref={ref}
      className={cn("mx-auto w-full max-w-7xl container-px", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
