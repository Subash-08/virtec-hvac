import { Zap, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const QUICK_LINKS = ["Products", "Services", "About", "Contact"];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-yellow/10 relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-yellow flex items-center justify-center rounded-sm">
                <Zap className="w-5 h-5 text-brand-charcoal" strokeWidth={2.5} />
              </div>
              <span
                className="font-display text-2xl text-brand-off-white tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                VIRTEC
              </span>
            </div>
            <p className="text-brand-off-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Global leader in HVAC VFD solutions. The EM760 series delivers unmatched performance, energy efficiency, and reliability for modern HVAC systems.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-yellow/60 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse-slow" />
              Automated Production &amp; Life
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-brand-off-white font-mono text-xs uppercase tracking-widest mb-5 pb-2 border-b border-brand-yellow/20">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-brand-off-white/50 hover:text-brand-yellow transition-colors group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-brand-off-white font-mono text-xs uppercase tracking-widest mb-5 pb-2 border-b border-brand-yellow/20">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-off-white/50">
                <MapPin className="w-4 h-4 text-brand-yellow/60 mt-0.5 shrink-0" />
                <span>2005 E 2700 S, STE 200<br />Salt Lake City, UT 84109, USA</span>
              </li>
              <li>
                <a
                  href="tel:+13045194567"
                  className="flex items-center gap-2 text-sm text-brand-off-white/50 hover:text-brand-yellow transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-yellow/60" />
                  +1 (304) 519-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@virtec.us"
                  className="flex items-center gap-2 text-sm text-brand-off-white/50 hover:text-brand-yellow transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-yellow/60" />
                  sales@virtec.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-yellow/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-off-white/30 font-mono">
            © {new Date().getFullYear()} Virtec Instruments Inc. All rights reserved.
          </p>
          <p className="text-xs text-brand-off-white/30 font-mono">
            www.virtec.us
          </p>
        </div>
      </div>
    </footer>
  );
}
