import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Flame, Layers, Radio, ShieldCheck, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "HVAC-Dedicated Functionality",
    description:
      "Tailored automatic energy optimization ensures peak efficiency, reducing energy consumption and operational costs in demanding HVAC environments.",
  },
  {
    icon: ShieldCheck,
    title: "DC Reactor & EMC Filters",
    description:
      "Built-in 5% impedance DC reactor reduces harmonic distortion. EMC Class C2 standard filter (C1 optional) ensures compliance with international standards.",
  },
  {
    icon: Layers,
    title: "Coated PCB Technology",
    description:
      "Conformal coating on all PCBs provides protection against moisture, dust, and chemicals — extending lifespan in harsh industrial environments.",
  },
  {
    icon: Flame,
    title: "Fire Mode",
    description:
      "Dedicated fire safety mode enables maximum speed operation for smoke extraction in emergencies, overriding normal control functions automatically.",
  },
  {
    icon: Radio,
    title: "Smart Communication",
    description:
      "Modbus RTU standard communication built-in. Optional BACnet IP card allows seamless BMS integration at the IP layer for intelligent building control.",
  },
  {
    icon: CheckCircle2,
    title: "Robust & Long-Life Design",
    description:
      "Operates efficiently up to 50°C ambient. Engineered for consistent performance across wide environmental ranges with reduced maintenance requirements.",
  },
];

export function CompanyOverview() {
  return (
    <section id="overview" className="relative py-28 bg-brand-charcoal overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-yellow/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <Reveal>
              <Badge variant="yellow" className="mb-4">Company Overview</Badge>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-display text-6xl lg:text-7xl text-brand-off-white leading-none tracking-wider mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ENGINEERED <br />
                <span className="text-brand-yellow">FOR EXCELLENCE</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} direction="right">
            <p className="text-brand-off-white/60 text-lg leading-relaxed mt-4 lg:mt-10">
              The Virtec EM760 HVAC VFD series is a powerful and versatile solution for modern HVAC systems. With dedicated HVAC functionality, advanced built-in protection, and a robust industrial design, it delivers unparalleled performance across the full range from 0.75 kW to 800 kW.
            </p>
            <p className="text-brand-off-white/40 text-base leading-relaxed mt-4">
              Virtec Instruments Inc. is committed to continuous technological advancement through innovation, precision, and reliability — delivering sustainable technologies that meet evolving HVAC industry requirements.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            <StatCard value={800} suffix="kW" label="Max Power Rating" delay={0} />
            <StatCard value={50} suffix="%" label="Energy Savings" delay={100} />
            <StatCard value={50} suffix="°C" label="Max Operating Temp" delay={200} />
            <StatCard value={3} prefix="" suffix=" PIDs" label="Expandable PID Control" delay={300} />
          </div>
        </Reveal>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 80}>
                <div className="group relative p-6 border border-brand-slate-light/60 bg-brand-slate/20 rounded-sm hover:border-brand-yellow/40 hover:bg-brand-slate/40 transition-all duration-300 overflow-hidden">
                  {/* Hover accent */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-sm bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon className="w-4 h-4 text-brand-yellow" />
                    </div>
                    <h3 className="font-medium text-brand-off-white/90 text-sm">{feature.title}</h3>
                  </div>
                  <p className="text-brand-off-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Vision strip */}
        <Reveal delay={100}>
          <div className="mt-20 p-8 lg:p-12 border border-brand-yellow/20 bg-gradient-to-r from-brand-slate/40 to-brand-charcoal/60 rounded-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-yellow/5 to-transparent pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-2">
                <span className="text-xs font-mono text-brand-yellow uppercase tracking-widest block mb-3">Our Vision</span>
                <p className="text-brand-off-white/80 text-xl leading-relaxed font-light">
                  &ldquo;To set HVAC industry benchmarks in VFD technology through innovation, precision, and reliability — delivering advanced, practical, and sustainable solutions.&rdquo;
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {["Salt Lake City, UT — USA", "+1 (304) 519-4567", "sales@virtec.us"].map((item) => (
                  <span key={item} className="text-sm text-brand-off-white/40 font-mono">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
