"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Cpu, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const TICKER_ITEMS = [
  "Three-Phase AC 340V–460V",
  "0.75kW – 710kW",
  "Built-in 5% DC Reactor",
  "EMC Filter Class C2 Standard",
  "Modbus RTU + BACnet IP",
  "Fire Mode Safety",
  "Energy Savings up to 50%",
  "IP65 Option Available",
  "660V–690V 18.5kW–800kW",
  "Coated PCB Protection",
];

const SPECS = [
  { icon: Zap, text: "0.75 – 800 kW" },
  { icon: Shield, text: "5% DC Reactor Built-in" },
  { icon: Cpu, text: "SVC & V/F Control" },
];

const CORNERS = [
  "top-0 left-0 border-t-2 border-l-2",
  "top-0 right-0 border-t-2 border-r-2",
  "bottom-0 left-0 border-b-2 border-l-2",
  "bottom-0 right-0 border-b-2 border-r-2",
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };
    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.35 + 0.08,
    }));

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,194,0,${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(245,194,0,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Transition helper
  const fade = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-brand-charcoal">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,194,0,0.06) 0%, transparent 70%)" }} />

      {/* Side accent lines */}
      <div className="absolute top-0 right-0 w-px h-full pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(245,194,0,0.2), transparent)" }} />
      <div className="absolute top-0 left-1/3 w-px h-full pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(245,194,0,0.08), transparent)" }} />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-7">

            {/* Badge */}
            <div style={fade(100)}>
              <Badge variant="yellow">
                <Cpu className="w-3 h-3" />
                EM760 HVAC Series VFD
              </Badge>
            </div>

            {/* Big headline */}
            <div style={fade(220)}>
              <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 1 }}>
                <span className="block text-7xl sm:text-8xl lg:text-9xl tracking-wider text-brand-off-white">
                  DRIVE
                </span>
                <span className="block text-7xl sm:text-8xl lg:text-9xl tracking-wider text-brand-yellow yellow-glow-text">
                  THE
                </span>
                <span className="block text-7xl sm:text-8xl lg:text-9xl tracking-wider text-brand-off-white">
                  FUTURE
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div style={fade(380)}>
              <p className="text-brand-off-white/60 text-lg leading-relaxed max-w-md">
                The Virtec EM760 HVAC Inverter series — state-of-the-art variable frequency drives engineered for superior performance, automatic energy optimization, and unmatched reliability in demanding HVAC environments.
              </p>
            </div>

            {/* CTA buttons */}
            <div style={fade(500)}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" href="#products">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" href="#contact">
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Micro-specs */}
            <div style={fade(640)}>
              <div className="flex flex-wrap gap-6 pt-2">
                {SPECS.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-brand-off-white/50">
                    <Icon className="w-4 h-4 text-brand-yellow/70" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — decorative VFD visual ── */}
          <div className="hidden lg:flex justify-center items-center" style={fade(400)}>
            <div className="relative w-80 aspect-[3/4]">
              {/* Outer glow frame */}
              <div className="absolute inset-0 rounded-sm border border-brand-yellow/20 yellow-glow" />
              <div className="absolute inset-3 rounded-sm border border-brand-yellow/10" />

              {/* Inner panel */}
              <div className="absolute inset-6 rounded-sm overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(160deg, #2A2D3E 0%, #1A1A2E 100%)" }}>

                {/* VFD body */}
                <div className="relative w-36 h-52">
                  <div className="absolute inset-0 rounded-sm border border-brand-yellow/25"
                    style={{ background: "linear-gradient(160deg, #3a3d4e 0%, #2a2d3e 100%)" }} />

                  {/* Display screen */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-11 rounded-sm border border-brand-yellow/30 flex items-center justify-center"
                    style={{ background: "#0d0f1a" }}>
                    <div className="space-y-1.5 w-14">
                      <div className="h-1 rounded-full bg-brand-yellow/70" />
                      <div className="h-1 rounded-full bg-brand-yellow/35 w-3/4" />
                      <div className="h-px rounded-full bg-brand-yellow/20 w-1/2" />
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <div className="absolute top-[72px] left-1/2 -translate-x-1/2 grid grid-cols-3 gap-1.5 w-20">
                    {["ESC","▲","ENT","M.K","▼",">>"].map((lbl) => (
                      <div key={lbl} className="h-4 rounded-sm border border-brand-yellow/15 flex items-center justify-center"
                        style={{ background: "#1e2130" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "6px", color: "rgba(245,194,0,0.5)" }}>{lbl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Run / Stop buttons */}
                  <div className="absolute top-[130px] left-1/2 -translate-x-1/2 flex gap-3">
                    <div className="w-7 h-7 rounded-full border-2 border-green-400/50 flex items-center justify-center"
                      style={{ background: "rgba(34,197,94,0.15)" }}>
                      <span style={{ fontSize: "6px", color: "rgba(74,222,128,0.8)", fontFamily: "var(--font-mono)" }}>RUN</span>
                    </div>
                    <div className="w-7 h-7 rounded-full border-2 border-red-400/50 flex items-center justify-center"
                      style={{ background: "rgba(239,68,68,0.15)" }}>
                      <span style={{ fontSize: "5px", color: "rgba(248,113,113,0.8)", fontFamily: "var(--font-mono)" }}>STOP</span>
                    </div>
                  </div>

                  {/* Vent slats */}
                  <div className="absolute bottom-4 left-3 right-3 space-y-1">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="h-px" style={{ background: "rgba(245,194,0,0.08)" }} />
                    ))}
                  </div>

                  {/* Brand name */}
                  <div className="absolute bottom-[52px] left-1/2 -translate-x-1/2 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-display)", fontSize: "10px", color: "rgba(245,194,0,0.35)", letterSpacing: "0.3em" }}>
                    VIRTEC
                  </div>
                </div>
              </div>

              {/* Corner brackets */}
              {CORNERS.map((cls, i) => (
                <div key={i} className={`absolute ${cls} w-5 h-5 border-brand-yellow/60`} />
              ))}

              {/* Floating spec chips */}
              <div className="absolute -right-8 top-1/4 rounded-sm border border-brand-yellow/30 px-3 py-1.5"
                style={{ background: "#2A2D3E" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#F5C200" }}>340–460V</span>
              </div>
              <div className="absolute -left-8 top-2/3 rounded-sm border border-brand-yellow/20 px-3 py-1.5"
                style={{ background: "#2A2D3E" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(245,194,0,0.65)" }}>SVC Mode</span>
              </div>
              <div className="absolute -right-10 bottom-1/4 rounded-sm border border-brand-yellow/20 px-3 py-1.5"
                style={{ background: "#2A2D3E" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(245,194,0,0.65)" }}>0.75–800kW</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── TICKER STRIP ── */}
      <div className="relative z-10 border-t border-b border-brand-yellow/20 py-3 overflow-hidden"
        style={{ background: "rgba(26,26,46,0.85)", backdropFilter: "blur(8px)" }}>
        <div style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 32s linear infinite",
        }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 mx-8 text-xs uppercase tracking-widest text-brand-off-white/40"
              style={{ fontFamily: "var(--font-mono)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow/60 inline-block flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-widest text-brand-off-white/30"
          style={{ fontFamily: "var(--font-mono)" }}>Scroll</span>
        <ChevronDown className="w-4 h-4 text-brand-yellow/60" style={{ animation: "bounce 1.5s infinite" }} />
      </div>
    </section>
  );
}
