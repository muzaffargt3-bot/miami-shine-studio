import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Reveal } from "@/components/site/Reveal";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Before & After Gallery — Mobile Detailing Miami | Camden" },
      { name: "description", content: "See the Camden transformation. Interactive before/after showcase of paint correction, ceramic coating and interior detailing in Miami." },
      { property: "og:title", content: "Before / After — Camden Auto Detail Miami" },
      { property: "og:description", content: "Drag the slider and see what real premium detailing looks like." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  const items = [
    { b: before1, a: after1, l: "Full Detail + Polish — Coupe" },
    { b: before2, a: after2, l: "Headlight Restoration" },
    { b: before3, a: after3, l: "Interior Deep Cleaning" },
    { b: before1, a: after1, l: "Paint Correction Stage 2" },
    { b: before3, a: after3, l: "Steam + Extraction" },
    { b: before2, a: after2, l: "Lens Clarity Restoration" },
  ];
  return (
    <>
      <section className="pt-40 pb-12">
        <div className="container mx-auto px-5">
          <Reveal>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-crimson" />
                <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">Gallery</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl tracking-wider leading-[0.9]">
                <span className="metallic-text">DRAG, SLIDE,</span>{" "}
                <span className="crimson-text">BE CONVINCED.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Interactive before-and-after slider gallery. Real client cars, real Camden results.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-6">
          {items.map((g, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <BeforeAfter before={g.b} after={g.a} label={g.l} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}