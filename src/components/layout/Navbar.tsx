"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
  { label: "Overview", href: "#overview" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-yellow/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-brand-charcoal" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-display text-2xl text-brand-off-white tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                VIRTEC
              </span>
              <span className="text-[9px] font-mono text-brand-yellow/70 tracking-[0.2em] uppercase -mt-0.5">
                Instruments Inc.
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-brand-off-white/70 hover:text-brand-yellow transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-yellow group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" href="mailto:sales@virtec.us">
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-brand-off-white hover:text-brand-yellow transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-72 border-b border-brand-yellow/10" : "max-h-0"
        )}
      >
        <div className="bg-brand-charcoal/98 backdrop-blur-md px-4 pb-6 pt-2 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-brand-off-white/80 hover:text-brand-yellow font-medium border-b border-brand-slate/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <Button variant="primary" size="sm" href="mailto:sales@virtec.us" className="w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
