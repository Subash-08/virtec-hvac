"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight, Cpu } from "lucide-react";

const PRODUCT_HIGHLIGHTS = [
  {
    id: "small",
    label: "Compact Series",
    range: "0.75 kW – 22 kW",
    voltage: "340V–460V Three-phase",
    models: ["EM760-0R7G/1R5P-3B", "EM760-1R5G/2R2P-3B", "EM760-2R2G/3R0P-3B", "EM760-4R0G/5R5P-3B"],
    currentRange: "2.5A – 44A",
    use: "Small HVAC units, ventilation fans, small pumps",
    tag: "For Compact HVAC",
  },
  {
    id: "mid",
    label: "Mid-Range Series",
    range: "22 kW – 132 kW",
    voltage: "340V–460V Three-phase",
    models: ["EM760-022G/030P-3B", "EM760-037G/045P-3/3B", "EM760-055G/075P-3/3B", "EM760-110G/132P-3"],
    currentRange: "45A – 248A",
    use: "AHUs, chiller pumps, large fans",
    tag: "Most Popular",
    featured: true,
  },
  {
    id: "large",
    label: "High-Power Series",
    range: "132 kW – 710 kW",
    voltage: "340V–460V Three-phase",
    models: ["EM760-132G/160P-3", "EM760-250G/280P-3", "EM760-355G/400P-3", "EM760-400G/450P-3"],
    currentRange: "253A – 810A",
    use: "District cooling pumps, large AHUs, industrial HVAC",
    tag: "Industrial Grade",
  },
  {
    id: "hv",
    label: "High Voltage Series",
    range: "18.5 kW – 800 kW",
    voltage: "660V–690V Three-phase",
    models: ["EM760C-450G/500P-3", "EM760C-500G/560P-3", "EM760C-560G/630P-3"],
    currentRange: "820A – 1140A",
    use: "High-voltage industrial HVAC, large-scale plants",
    tag: "660–690V",
  },
];

const SAMPLE_SPECS = [
  { model: "EM760-0R7G/1R5P-3B", power: "0.75/1.5", current: "2.5/4.2" },
  { model: "EM760-5R5G/7R5P-3B", power: "5.5/7.5", current: "13/17" },
  { model: "EM760-011G/015P-3B", power: "11/15", current: "25/32" },
  { model: "EM760-022G/030P-3B", power: "22/30", current: "45/59" },
  { model: "EM760-045G/055P-3/3B", power: "45/55", current: "90/106" },
  { model: "EM760-075G/090P-3/3B", power: "75/90", current: "150/169" },
  { model: "EM760-110G/132P-3", power: "110/132", current: "210/248" },
  { model: "EM760-200G/220P-3", power: "200/220", current: "380/410" },
  { model: "EM760-315G/355P-3", power: "315/355", current: "585/640" },
  { model: "EM760C-560G/630P-3", power: "560/630", current: "1010/1140" },
];

export function FeaturedProducts() {
  const [activeCard, setActiveCard] = useState("mid");

  return (
    <section id="products" className="relative py-28 bg-brand-charcoal-light overflow-hidden">
      {/* Diagonal top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />

      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <Reveal>
              <Badge variant="yellow" className="mb-4">
                <Cpu className="w-3 h-3" />
                Product Line
              </Badge>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-display text-6xl lg:text-7xl text-brand-off-white leading-none tracking-wider"
                style={{ fontFamily: "var(--font-display)" }}
              >
                EM760
                <br />
                <span className="text-brand-yellow">SERIES</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-brand-off-white/50 text-sm max-w-xs leading-relaxed">
              A complete range of HVAC inverters from 0.75 kW to 800 kW across multiple voltage classes. G-model (compressors) and P-model (pumps &amp; fans) variants available.
            </p>
          </Reveal>
        </div>

        {/* Product category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PRODUCT_HIGHLIGHTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <button
                onClick={() => setActiveCard(product.id)}
                className={`w-full text-left p-5 rounded-sm border transition-all duration-300 relative overflow-hidden group ${
                  activeCard === product.id
                    ? "border-brand-yellow bg-brand-yellow/10"
                    : "border-brand-slate-light/60 bg-brand-slate/20 hover:border-brand-yellow/40"
                }`}
              >
                {product.featured && (
                  <span className="absolute top-3 right-3 text-[9px] font-mono text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/30 px-2 py-0.5 rounded-sm uppercase tracking-widest">
                    Popular
                  </span>
                )}
                <span className="block text-xs font-mono text-brand-yellow/60 uppercase tracking-widest mb-2">
                  {product.tag}
                </span>
                <h3 className="font-medium text-brand-off-white/90 text-sm mb-1">{product.label}</h3>
                <span className="block text-xl font-display text-brand-yellow" style={{ fontFamily: "var(--font-display)" }}>
                  {product.range}
                </span>
                <span className="block text-xs text-brand-off-white/40 mt-2 leading-relaxed">{product.use}</span>
                <ChevronRight
                  className={`w-4 h-4 mt-3 transition-transform duration-300 ${
                    activeCard === product.id ? "text-brand-yellow translate-x-1" : "text-brand-off-white/20"
                  }`}
                />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Active product detail panel */}
        {PRODUCT_HIGHLIGHTS.filter((p) => p.id === activeCard).map((product) => (
          <Reveal key={product.id}>
            <div className="mb-16 p-6 lg:p-8 border border-brand-yellow/20 bg-brand-slate/30 rounded-sm">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="yellow">{product.label}</Badge>
                    <span className="text-xs font-mono text-brand-off-white/40">{product.voltage}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.models.map((model) => (
                      <div
                        key={model}
                        className="flex items-center gap-2 p-3 bg-brand-charcoal/50 border border-brand-slate-light/40 rounded-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                        <span className="text-sm font-mono text-brand-off-white/70">{model}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-brand-charcoal/50 border border-brand-yellow/10 rounded-sm">
                    <span className="text-xs font-mono text-brand-off-white/40 uppercase tracking-widest block mb-1">Power Range</span>
                    <span className="text-2xl font-display text-brand-yellow" style={{ fontFamily: "var(--font-display)" }}>{product.range}</span>
                  </div>
                  <div className="p-4 bg-brand-charcoal/50 border border-brand-yellow/10 rounded-sm">
                    <span className="text-xs font-mono text-brand-off-white/40 uppercase tracking-widest block mb-1">Current Range</span>
                    <span className="text-2xl font-display text-brand-off-white/80" style={{ fontFamily: "var(--font-display)" }}>{product.currentRange}</span>
                  </div>
                  <div className="p-4 bg-brand-charcoal/50 border border-brand-yellow/10 rounded-sm">
                    <span className="text-xs font-mono text-brand-off-white/40 uppercase tracking-widest block mb-1">Application</span>
                    <span className="text-sm text-brand-off-white/60">{product.use}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Sample spec table */}
        <Reveal>
          <div className="mb-10">
            <h3 className="text-brand-off-white/70 font-mono text-xs uppercase tracking-widest mb-4">
              Sample Product List — Three-Phase AC 340V–460V
            </h3>
            <div className="overflow-x-auto rounded-sm border border-brand-slate-light/60">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-slate/60 border-b border-brand-slate-light/60">
                    <th className="text-left px-4 py-3 text-brand-yellow/70 font-mono text-xs uppercase tracking-widest">Model</th>
                    <th className="text-left px-4 py-3 text-brand-yellow/70 font-mono text-xs uppercase tracking-widest">Motor Power (kW)</th>
                    <th className="text-left px-4 py-3 text-brand-yellow/70 font-mono text-xs uppercase tracking-widest">Rated Current (A)</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_SPECS.map((row, i) => (
                    <tr
                      key={row.model}
                      className={`border-b border-brand-slate-light/30 hover:bg-brand-slate/30 transition-colors ${
                        i % 2 === 0 ? "" : "bg-brand-charcoal/30"
                      }`}
                    >
                      <td className="px-4 py-3 font-mono text-brand-off-white/80">{row.model}</td>
                      <td className="px-4 py-3 text-brand-off-white/60">{row.power}</td>
                      <td className="px-4 py-3 text-brand-yellow/80">{row.current}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-off-white/30 mt-3 font-mono">
              G model: 150% rated current for 60s (Compressors) | P model: 120% rated current for 60s (Pumps &amp; Fans)
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex justify-center">
            <Button variant="outline" size="lg" href="mailto:sales@virtec.us">
              Request Full Specification Sheet
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
