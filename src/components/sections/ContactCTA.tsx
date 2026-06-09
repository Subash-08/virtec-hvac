"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email Us",
    value: "sales@virtec.us",
    href: "mailto:sales@virtec.us",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (304) 519-4567",
    href: "tel:+13045194567",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "2005 E 2700 S, STE 200, Salt Lake City, UT 84109",
    href: "https://maps.google.com",
  },
];

export function ContactCTA() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    power: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-brand-charcoal overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-brand-yellow/4 to-transparent pointer-events-none" />

      {/* Large background text */}
      <div
        className="absolute -bottom-10 left-0 right-0 text-center font-display text-[12rem] lg:text-[16rem] text-brand-yellow/3 leading-none pointer-events-none select-none overflow-hidden"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden
      >
        CONTACT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Badge variant="yellow" className="mb-4">Get in Touch</Badge>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-display text-6xl lg:text-8xl text-brand-off-white leading-none tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LET&apos;S <span className="text-brand-yellow">WORK</span><br />TOGETHER
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-brand-off-white/50 text-lg mt-6 max-w-xl mx-auto">
              Ready to optimize your HVAC system with the EM760 series? Our team is ready to help you select the right VFD solution and provide a detailed quote.
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left – contact channels */}
          <div className="lg:col-span-2 space-y-5">
            {CONTACT_CHANNELS.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.label} delay={i * 80}>
                  <a
                    href={channel.href}
                    className="flex items-start gap-4 p-5 border border-brand-slate-light/60 bg-brand-slate/20 rounded-sm hover:border-brand-yellow/40 hover:bg-brand-slate/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-brand-yellow/10 border border-brand-yellow/20 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1">
                        {channel.label}
                      </span>
                      <span className="text-brand-off-white/80 text-sm">{channel.value}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-yellow/0 group-hover:text-brand-yellow/60 ml-auto self-center transition-colors" />
                  </a>
                </Reveal>
              );
            })}

            {/* Distributor callout */}
            <Reveal delay={300}>
              <div className="p-5 border border-brand-yellow/20 bg-brand-yellow/5 rounded-sm">
                <span className="block text-xs font-mono text-brand-yellow uppercase tracking-widest mb-2">Global Distributors</span>
                <p className="text-brand-off-white/60 text-sm">
                  Middle East: Supra Controls | India: Virtec India — contact us for regional distributor information in your area.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right – quote form */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="p-6 lg:p-8 border border-brand-slate-light/60 bg-brand-slate/20 rounded-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-14 h-14 bg-brand-yellow/10 border border-brand-yellow/40 rounded-full flex items-center justify-center">
                    <Send className="w-7 h-7 text-brand-yellow" />
                  </div>
                  <h3
                    className="font-display text-3xl text-brand-yellow"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    MESSAGE SENT!
                  </h3>
                  <p className="text-brand-off-white/60 text-sm max-w-xs">
                    Thank you for your inquiry. Our team will contact you within 24 hours with a tailored EM760 solution.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-brand-yellow/70 mb-6">
                    Request a Quote
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-brand-charcoal border border-brand-slate-light/60 rounded-sm px-4 py-2.5 text-sm text-brand-off-white/80 placeholder-brand-off-white/20 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full bg-brand-charcoal border border-brand-slate-light/60 rounded-sm px-4 py-2.5 text-sm text-brand-off-white/80 placeholder-brand-off-white/20 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full bg-brand-charcoal border border-brand-slate-light/60 rounded-sm px-4 py-2.5 text-sm text-brand-off-white/80 placeholder-brand-off-white/20 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1.5">
                        Required Power Range
                      </label>
                      <select
                        name="power"
                        value={formState.power}
                        onChange={handleChange}
                        className="w-full bg-brand-charcoal border border-brand-slate-light/60 rounded-sm px-4 py-2.5 text-sm text-brand-off-white/80 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                      >
                        <option value="">Select power range</option>
                        <option value="0.75-22">0.75 kW – 22 kW (Compact)</option>
                        <option value="22-132">22 kW – 132 kW (Mid-Range)</option>
                        <option value="132-710">132 kW – 710 kW (High-Power)</option>
                        <option value="hv">18.5 kW – 800 kW (660–690V HV)</option>
                        <option value="custom">Custom / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-brand-off-white/40 uppercase tracking-widest mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your HVAC application..."
                        className="w-full bg-brand-charcoal border border-brand-slate-light/60 rounded-sm px-4 py-2.5 text-sm text-brand-off-white/80 placeholder-brand-off-white/20 focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
                      />
                    </div>
                    <Button variant="primary" size="md" className="w-full justify-center">
                      Send Inquiry
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
