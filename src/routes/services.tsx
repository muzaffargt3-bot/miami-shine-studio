import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { services } from "@/components/site/data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import ceramicImg from "@/assets/service-ceramic.jpg";
import paintImg from "@/assets/service-paint.jpg";
import interiorImg from "@/assets/service-interior.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Detailing Services — Ceramic Coating, Paint Correction Miami | Camden" },
      { name: "description", content: "Ceramic coating, paint correction, full detail, interior deep cleaning and more in Miami, FL. Premium mobile car detailing services." },
      { property: "og:title", content: "Premium Detailing Services in Miami — Camden" },
      { property: "og:description", content: "Eight specialist detailing services tailored to your vehicle. Ceramic coating, paint correction, interior, engine bay and more." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const galleryImages = [ceramicImg, paintImg, interiorImg];

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-5 relative">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-crimson" />
                <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">Services</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-[0.9]">
                <span className="metallic-text">EVERY SERVICE.</span>{" "}
                <span className="crimson-text">SHOWROOM STANDARD.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                From a same-day exterior wash to multi-stage paint correction and 9H ceramic coating, every package is delivered to your driveway with premium products and certified technique.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-5 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <div className="grid lg:grid-cols-12 gap-6 glass p-6 lg:p-8 rounded-sm group hover:border-crimson/60 transition-all">
                <div className="lg:col-span-4 relative aspect-[4/3] rounded-sm overflow-hidden">
                  <img
                    src={galleryImages[i % galleryImages.length]}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-crimson font-cond uppercase text-[10px] tracking-widest text-white">0{i + 1}</div>
                </div>
                <div className="lg:col-span-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 red-gradient rounded-sm rotate-45 flex items-center justify-center">
                      <s.icon className="w-4 h-4 text-white -rotate-45" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl tracking-widest metallic-text">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">{s.blurb}</p>
                  <div className="mt-5">
                    <Link to="/booking" className="inline-flex items-center gap-2 font-cond uppercase tracking-widest text-sm text-crimson hover:gap-3 transition-all">
                      Book this service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5">
          <Reveal>
            <div className="glass-strong rounded-sm p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />
              <SectionHeading
                eyebrow="Custom Packages"
                title="NOT SURE WHICH PACKAGE"
                highlight="FITS?"
                description="Tell us about your vehicle and we'll build the right detail program for you."
              />
              <Link to="/booking" className="inline-flex items-center gap-3 red-gradient text-white font-cond uppercase tracking-widest text-sm px-8 py-4 rounded-sm glow-red">
                <Calendar className="w-4 h-4" /> Book a Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}