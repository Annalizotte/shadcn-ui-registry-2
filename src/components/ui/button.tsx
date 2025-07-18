import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[oklch(0.58_0.10_258.5)] shadow-xs dark:hover:bg-primary/80 hover:text-white",
        destructive:
          "bg-destructive/85 text-white/90 shadow-xs hover:text-white hover:bg-destructive focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:hover:bg-destructive/70",
        outline:
          "border bg-background shadow-xs hover:bg-black/1 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:hover:text-white",
        secondary:
          "bg-secondary text-black/75 hover:text-black/95 shadow-xs hover:bg-[oklch(0.82_0.038_254.41)] dark:text-foreground dark:hover:bg-secondary/75 dark:hover:text-white",
        ghost:
          "text-black/80 hover:text-black/95 hover:bg-secondary/40 hover:text-black/80 dark:text-foreground dark:hover:bg-foreground/10 dark:hover:text-white",
        link:
          "text-primary underline-offset-4 hover:underline hover:text-[oklch(0.52_0.10_258.5)] dark:hover:text-[oklch(0.62_0.22_260.60)]",
      },
      size: {
        default:"h-6 px-2 py-1 has-[>svg:first-child]:pl-1.5 has-[>svg:last-child]:pr-1.5",
        sm: "h-5 rounded-md gap-1.5 px-2 text-sm",
        lg: "h-7 rounded-md px-3 text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  iconPosition,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconPosition?: "left" | "right";
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-icon-position={iconPosition}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
