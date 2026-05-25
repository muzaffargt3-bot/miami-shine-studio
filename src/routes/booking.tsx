import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ShieldCheck, Phone } from "lucide-react";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book Mobile Car Detailing in Miami — Camden Auto Detail" },
      { name: "description", content: "Book your premium mobile car detailing appointment in Miami. Ceramic coating, paint correction, full detail. We come to you." },
      { property: "og:title", content: "Book — Camden Mobile Detailing Miami" },
      { property: "og:description", content: "Schedule your detail today. Mobile service across Miami-Dade." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(25),
  vehicle: z.string().trim().min(2, "Tell us about your vehicle").max(80),
  service: z.string().min(1, "Pick a service"),
  date: z.string().min(1, "Pick a date"),
  message: z.string().max(800).optional(),
});

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Simulated submission — replace with real backend if Lovable Cloud enabled
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Request received — we'll confirm by phone shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="relative pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-5 relative grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-crimson" />
              <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">Book</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl tracking-wider leading-[0.9]">
              <span className="metallic-text">BOOK YOUR</span>
              <br />
              <span className="crimson-text">DETAIL.</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Fill in your details and we'll confirm by phone within the hour during business hours.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Calendar, t: "Flexible Scheduling", d: "Mon–Sat, 8am–7pm. Evening & weekend slots available." },
                { icon: ShieldCheck, t: "100% Satisfaction", d: "Not happy? We make it right." },
                { icon: Phone, t: "Direct Line", d: "Prefer to talk? (305) 555-0199" },
              ].map((f) => (
                <div key={f.t} className="flex gap-4 glass p-4 rounded-sm">
                  <f.icon className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                  <div>
                    <div className="font-display tracking-widest text-silver">{f.t}</div>
                    <p className="text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-strong p-8 lg:p-10 rounded-sm space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" placeholder="Your name" />
                <Field label="Phone" name="phone" type="tel" placeholder="(305) 555-0199" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Vehicle (Make / Model)" name="vehicle" placeholder="e.g. Porsche 911" />
                <div>
                  <Label>Service Needed</Label>
                  <select
                    name="service"
                    defaultValue=""
                    className="w-full bg-input border border-border rounded-sm px-4 py-3 text-silver focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition-all font-cond uppercase tracking-wider text-sm"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Custom Package">Custom Package — talk to us</option>
                  </select>
                </div>
              </div>
              <Field label="Preferred Date" name="date" type="date" />
              <div>
                <Label>Message (optional)</Label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about the condition of your vehicle, parking, anything we should know..."
                  className="w-full bg-input border border-border rounded-sm px-4 py-3 text-silver placeholder:text-muted-foreground focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full red-gradient text-white font-cond uppercase tracking-widest text-sm px-8 py-4 rounded-sm glow-red glow-red-hover disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Request Appointment"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting you agree to be contacted about your booking.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block font-cond uppercase tracking-widest text-[11px] text-silver mb-2">{children}</label>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-input border border-border rounded-sm px-4 py-3 text-silver placeholder:text-muted-foreground focus:border-crimson focus:outline-none focus:ring-1 focus:ring-crimson transition-all"
      />
    </div>
  );
}