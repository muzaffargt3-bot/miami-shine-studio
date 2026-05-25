import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, ShieldCheck, Sparkles, Users, Award, CheckCircle2, MapPin, Star } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Particles } from "@/components/site/Particles";
import { services, testimonials, process, whyUs } from "@/components/site/data";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Camden Auto Detail Experts USA — Premium Mobile Car Detailing Miami, FL" },
      { name: "description", content: "Miami's premium mobile car detailing studio. Ceramic coating, paint correction, interior deep cleaning. We come to you. Book your appointment today." },
      { property: "og:title", content: "Camden Auto Detail Experts — Miami Mobile Car Detailing" },
      { property: "og:description", content: "We don't just clean — we transform. Premium mobile car detailing services in Miami, FL." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <GallerySection />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroCar} alt="Luxury black sports car detailed by Camden Auto Detail" className="w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      <Particles count={30} />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <motion.div style={{ opacity }} className="container mx-auto px-5 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-crimson pulse-glow" />
            <span className="font-cond uppercase tracking-[0.3em] text-xs text-silver">Mobile Detail Studio • Miami, FL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.85] tracking-wider"
          >
            <span className="metallic-text">WE DON'T</span>
            <br />
            <span className="metallic-text">JUST CLEAN</span>
            <br />
            <span className="crimson-text">WE TRANSFORM</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Premium Mobile Car Detailing Services in Miami, FL. Ceramic coating, paint correction and concours-level finish — delivered to your driveway.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/booking"
              className="group inline-flex items-center gap-3 red-gradient text-white font-cond uppercase tracking-widest text-sm px-7 py-4 rounded-sm glow-red glow-red-hover"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 glass text-silver font-cond uppercase tracking-widest text-sm px-7 py-4 rounded-sm hover:border-crimson/60 transition-all"
            >
              View Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {[
            { icon: Sparkles, label: "Premium Products" },
            { icon: Users, label: "Expert Technicians" },
            { icon: ShieldCheck, label: "100% Satisfaction" },
            { icon: Award, label: "Professional Detailing" },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              className="glass-strong p-5 rounded-sm relative overflow-hidden group hover:border-crimson/60 transition-all"
            >
              <div className="absolute -top-px left-0 right-0 h-px animate-shimmer" />
              <b.icon className="w-6 h-6 text-crimson mb-3" />
              <div className="font-cond uppercase tracking-widest text-xs text-silver leading-tight">{b.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-cond uppercase tracking-[0.4em] text-[10px]">Scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-crimson to-transparent" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-5 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden glass">
              <img src={heroCar} alt="Camden detailing in action" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong p-5 rounded-sm">
                <div className="font-display text-3xl crimson-text">10+</div>
                <div className="font-cond uppercase tracking-widest text-xs text-silver">Years of Detailing Mastery</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-crimson" />
                <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">About Camden</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl tracking-wider metallic-text leading-[0.95]">
                A LUXURY DETAIL STUDIO <span className="crimson-text">ON WHEELS</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Camden Auto Detail Experts is Miami's premier mobile detailing studio. We bring concours-level care to your home, office, marina or hotel — anywhere in Miami-Dade. From daily drivers to one-off exotics, every vehicle gets the same obsessive attention.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, t: "Mobile Across Miami", d: "We come to you — anywhere in Miami-Dade." },
                  { icon: ShieldCheck, t: "Insured & Certified", d: "Trained technicians, certified ceramic installers." },
                  { icon: Sparkles, t: "Premium Products", d: "Only top-shelf chemicals and tools — never shortcuts." },
                  { icon: Award, t: "Luxury Experience", d: "From first call to final reveal — concierge service." },
                ].map((f) => (
                  <div key={f.t} className="glass p-5 rounded-sm group hover:border-crimson/60 transition-all">
                    <f.icon className="w-5 h-5 text-crimson mb-3" />
                    <div className="font-display tracking-widest text-silver">{f.t}</div>
                    <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative py-28 bg-[oklch(0.11_0.005_0)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />
      <div className="container mx-auto px-5 relative">
        <Reveal>
          <SectionHeading
            eyebrow="Premium Services"
            title="OUR DETAIL"
            highlight="ARSENAL"
            description="Eight specialist services. One obsessive standard. Every package customised to your vehicle."
          />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <div className="group relative glass p-7 rounded-sm h-full overflow-hidden hover:border-crimson/60 transition-all glow-red-hover">
                <div className="absolute top-0 right-0 w-32 h-32 bg-crimson/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-sm red-gradient rotate-45 flex items-center justify-center mb-5 group-hover:rotate-[225deg] transition-transform duration-700">
                    <s.icon className="w-5 h-5 text-white -rotate-45" />
                  </div>
                  <div className="font-cond uppercase text-[10px] tracking-[0.3em] text-crimson mb-1">0{i + 1}</div>
                  <h3 className="font-display text-2xl tracking-widest metallic-text mb-3 leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 font-cond uppercase tracking-widest text-sm text-crimson hover:gap-3 transition-all">
              Explore all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Before / After"
            title="THE"
            highlight="TRANSFORMATION"
            description="Drag the slider. The work speaks for itself."
          />
        </Reveal>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { b: beforeImg, a: afterImg, l: "Full Detail + Polish" },
            { b: before2, a: after2, l: "Headlight Restoration" },
            { b: before3, a: after3, l: "Interior Deep Clean" },
          ].map((g, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <BeforeAfter before={g.b} after={g.a} label={g.l} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 font-cond uppercase tracking-widest text-sm text-crimson hover:gap-3 transition-all">
              See full gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-28 bg-[oklch(0.11_0.005_0)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-5 relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Camden"
            title="THE CAMDEN"
            highlight="STANDARD"
          />
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07}>
              <div className="glass p-7 rounded-sm h-full group hover:border-crimson/60 transition-all glow-red-hover relative overflow-hidden">
                <div className="font-display text-6xl crimson-text/30 leading-none opacity-30 absolute top-2 right-3">0{i + 1}</div>
                <CheckCircle2 className="w-6 h-6 text-crimson mb-4" />
                <div className="font-display text-lg tracking-widest text-silver mb-2">{w.title}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-5">
        <Reveal>
          <SectionHeading
            eyebrow="The Process"
            title="FROM BOOKING"
            highlight="TO PERFECTION"
            description="Four steps. Zero shortcuts. Maximum results."
          />
        </Reveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full red-gradient opacity-20 blur-xl" />
                    <div className="relative w-full h-full rounded-full glass-strong flex items-center justify-center border-2 border-crimson/40">
                      <span className="font-display text-3xl crimson-text">{p.step}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl tracking-widest metallic-text mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-28 bg-[oklch(0.11_0.005_0)] overflow-hidden">
      <div className="container mx-auto px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Client Reviews"
            title="WORDS FROM"
            highlight="OUR CLIENTS"
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="glass p-8 rounded-sm h-full group hover:border-crimson/60 transition-all glow-red-hover relative">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-crimson text-crimson" />
                  ))}
                </div>
                <p className="text-silver leading-relaxed text-lg italic">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-crimson/40" loading="lazy" />
                  <div>
                    <div className="font-display tracking-widest text-silver">{t.name}</div>
                    <div className="text-xs font-cond uppercase tracking-widest text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCar} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background" />
      </div>
      <div className="container mx-auto px-5 relative text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider leading-[0.9]">
            <span className="metallic-text">READY TO</span>
            <br />
            <span className="crimson-text">TRANSFORM YOUR RIDE?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Book your premium detail today. We arrive on time, fully equipped, ready to deliver showroom finish.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="group inline-flex items-center gap-3 red-gradient text-white font-cond uppercase tracking-widest text-sm px-8 py-4 rounded-sm glow-red glow-red-hover">
              <Calendar className="w-4 h-4" /> Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+13055550199" className="group inline-flex items-center gap-3 glass text-silver font-cond uppercase tracking-widest text-sm px-8 py-4 rounded-sm hover:border-crimson/60 transition-all">
              Call (305) 555-0199
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
