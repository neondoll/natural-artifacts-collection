import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex justify-center items-center gap-2 text-sm font-medium whitespace-nowrap rounded-md ring-offset-white",
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950",
    "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:size-4",
    "[&_svg]:pointer-events-none dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-zinc-50 bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-zinc-50 dark:hover:bg-zinc-50/90",
        ],
        destructive: [
          "text-zinc-50 bg-red-500 hover:bg-red-500/90 dark:text-zinc-50 dark:bg-red-900 dark:hover:bg-red-900/90",
        ],
        outline: [
          "bg-white border border-zinc-200 hover:text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800",
          "dark:hover:text-zinc-50 dark:hover:bg-zinc-800",
        ],
        secondary: [
          "text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 dark:text-zinc-50 dark:bg-zinc-800 dark:hover:bg-zinc-800/80",
        ],
        ghost: "hover:text-zinc-900 hover:bg-zinc-100 dark:hover:text-zinc-50 dark:hover:bg-zinc-800",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: { default: "h-10 px-4 py-2", sm: "h-9 px-3 rounded-md", lg: "h-11 px-8 rounded-md", icon: "w-10 h-10" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />);
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
