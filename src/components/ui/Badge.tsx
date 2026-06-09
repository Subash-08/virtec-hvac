import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "yellow" | "outline" | "dark";
}

export function Badge({ children, className, variant = "yellow" }: BadgeProps) {
  const variants = {
    yellow: "bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30",
    outline: "border border-brand-off-white/20 text-brand-off-white/60",
    dark: "bg-brand-slate text-brand-off-white/70 border border-brand-slate-light",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
