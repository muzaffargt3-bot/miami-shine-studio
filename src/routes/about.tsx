import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Award, Users, ShieldCheck, MapPin } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Camden — Premium Mobile Detailing Studio Miami" },
      { name: "description", content: "Camden Auto Detail Experts is Miami's premium mobile detailing studio. Years of experience, certified techs, obsessive standards." },
      { property: "og:title", content: "About — Camden Auto Detail Experts Miami" },
      { property: "og:description", content: "We bring the showroom to your driveway. Concierge mobile detailing across Miami-Dade." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCar} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container mx-auto px-5 relative max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-crimson" />
              <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">Our Story</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-[0.9]">
              <span className="metallic-text">DETAILING IS</span>{" "}
              <span className="crimson-text">AN OBSESSION.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Camden Auto Detail Experts was founded in Miami with one mission: deliver concours-level detailing convenience to clients who refuse to compromise. We don't run an assembly line — every vehicle gets dedicated time, premium products and a technician who treats it like their own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5 grid lg:grid-cols-3 gap-6">
          {[
            { icon: Award, t: "Certified Mastery", d: "Ceramic-coating certified installers, trained on luxury and exotic finishes." },
            { icon: MapPin, t: "Mobile Across Miami", d: "Driveway, condo garage, marina, office — we bring the studio to you." },
            { icon: Users, t: "Concierge Service", d: "From first call to final walkaround, white-glove communication throughout." },
            { icon: ShieldCheck, t: "Fully Insured", d: "Comprehensive coverage. We treat your vehicle like a museum piece." },
            { icon: Award, t: "Premium Only", d: "Gyeon, CarPro, Koch-Chemie. Top-shelf products — no shortcuts." },
            { icon: Users, t: "Obsessive Detail", d: "Inspection lights, magnification, multi-stage QC on every job." },
          ].map((f, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="glass p-7 rounded-sm h-full hover:border-crimson/60 transition-all glow-red-hover">
                <f.icon className="w-6 h-6 text-crimson mb-4" />
                <div className="font-display text-xl tracking-widest text-silver mb-2">{f.t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}