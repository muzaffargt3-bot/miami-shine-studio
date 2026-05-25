import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Instagram, Facebook, MapPin, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Camden Auto Detail — Miami Mobile Detailing" },
      { name: "description", content: "Get in touch with Camden Auto Detail Experts. Call, WhatsApp, or visit us on Instagram and Facebook. Mobile detailing across Miami." },
      { property: "og:title", content: "Contact — Camden Auto Detail Miami" },
      { property: "og:description", content: "Reach out by phone, WhatsApp or social. We service all of Miami-Dade." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container mx-auto px-5">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-crimson" />
                <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">Contact</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-[0.9]">
                <span className="metallic-text">GET IN</span>{" "}
                <span className="crimson-text">TOUCH.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Call, message or DM — we respond fast. Mobile service across Miami-Dade County.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Phone, t: "Call", v: "(305) 555-0199", href: "tel:+13055550199" },
            { icon: MessageCircle, t: "WhatsApp", v: "Chat with us", href: "https://wa.me/13055550199" },
            { icon: Instagram, t: "Instagram", v: "@camdenautodetail", href: "https://instagram.com" },
            { icon: Facebook, t: "Facebook", v: "Camden Auto Detail", href: "https://facebook.com" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="glass p-6 rounded-sm block group hover:border-crimson/60 transition-all glow-red-hover">
                <c.icon className="w-6 h-6 text-crimson mb-4" />
                <div className="font-cond uppercase tracking-widest text-xs text-muted-foreground">{c.t}</div>
                <div className="font-display text-xl tracking-widest text-silver group-hover:text-crimson transition-colors mt-1">{c.v}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-5 grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-5">
            <div className="glass-strong p-8 rounded-sm space-y-6">
              <div>
                <div className="font-cond uppercase tracking-[0.4em] text-xs text-crimson mb-2">Service Area</div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-crimson mt-1 shrink-0" />
                  <div>
                    <div className="font-display text-2xl tracking-widest metallic-text">Miami, Florida</div>
                    <p className="text-sm text-muted-foreground mt-1">Mobile service across Miami-Dade County — Brickell, Wynwood, Coral Gables, South Beach, Aventura, Doral and surrounding areas.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-border/40 pt-6 flex items-start gap-3">
                <Clock className="w-5 h-5 text-crimson mt-1 shrink-0" />
                <div>
                  <div className="font-display text-lg tracking-widest text-silver">Hours</div>
                  <p className="text-sm text-muted-foreground">Mon–Sat: 8:00 AM – 7:00 PM<br />Sunday: By appointment</p>
                </div>
              </div>
              <div className="border-t border-border/40 pt-6 flex items-start gap-3">
                <Mail className="w-5 h-5 text-crimson mt-1 shrink-0" />
                <div>
                  <div className="font-display text-lg tracking-widest text-silver">Email</div>
                  <a href="mailto:book@camdenautodetail.com" className="text-sm text-muted-foreground hover:text-crimson">book@camdenautodetail.com</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <div className="rounded-sm overflow-hidden glass aspect-[16/12] lg:aspect-auto lg:h-full min-h-[420px]">
              <iframe
                title="Miami map"
                src="https://www.google.com/maps?q=Miami,FL&output=embed"
                className="w-full h-full border-0 grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}