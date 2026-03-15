import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-superior-slate disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-superior-blue text-white hover:bg-superior-blue-light shadow-sm dark:bg-superior-mist-light dark:text-superior-blue-dark dark:hover:bg-white",
        secondary:
          "bg-superior-mist text-superior-blue-dark hover:bg-superior-mist-dark dark:bg-superior-slate-dark dark:text-white dark:hover:bg-superior-slate",
        outline:
          "border border-superior-slate/30 bg-transparent text-superior-blue hover:bg-superior-mist hover:text-superior-blue-dark dark:border-superior-slate-dark dark:text-superior-mist-light dark:hover:bg-superior-slate-dark/50",
        ghost:
          "hover:bg-superior-mist/50 text-superior-blue hover:text-superior-blue-dark dark:text-superior-mist-light dark:hover:bg-superior-slate-dark/50 dark:hover:text-white",
        link: "text-superior-blue underline-offset-4 hover:underline dark:text-superior-mist-light",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {props.children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;