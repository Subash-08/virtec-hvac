"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-brand-yellow text-brand-charcoal hover:bg-brand-yellow-light active:scale-95 hover:shadow-[0_0_24px_rgba(245,194,0,0.4)]",
      outline:
        "border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-charcoal active:scale-95",
      ghost:
        "text-brand-off-white hover:text-brand-yellow underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm rounded",
      md: "px-6 py-3 text-base rounded",
      lg: "px-8 py-4 text-lg rounded-sm",
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(base, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
