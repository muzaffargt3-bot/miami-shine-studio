import { Droplets, Sparkles, Layers, Wrench, Shield, Sofa, Car, Lightbulb } from "lucide-react";

export const services = [
  {
    slug: "full-detail",
    title: "Full Detail",
    icon: Car,
    blurb: "Complete inside-out restoration. Wash, decontamination, polish, interior deep clean, dressing — the works.",
  },
  {
    slug: "paint-correction",
    title: "Paint Correction",
    icon: Layers,
    blurb: "Multi-stage machine polishing to remove swirls, holograms and oxidation. Mirror finish guaranteed.",
  },
  {
    slug: "clay-bar",
    title: "Clay Bar Treatment",
    icon: Droplets,
    blurb: "Pull bonded contaminants out of your clear coat for paint that feels — and looks — like glass.",
  },
  {
    slug: "engine-bay",
    title: "Engine Bay Detailing",
    icon: Wrench,
    blurb: "Safe steam, brush and dressing routine that leaves your engine bay showroom clean.",
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    icon: Shield,
    blurb: "Long-term 9H ceramic protection. Hydrophobic, UV-resistant, deep gloss for years not months.",
  },
  {
    slug: "interior-deep-clean",
    title: "Interior Deep Cleaning",
    icon: Sofa,
    blurb: "Steam, extraction, leather conditioning. Every stitch, vent and crevice — restored.",
  },
  {
    slug: "exterior-wash",
    title: "Exterior Wash",
    icon: Sparkles,
    blurb: "Two-bucket safe wash, foam cannon, soft microfiber dry. The proper way — every time.",
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    icon: Lightbulb,
    blurb: "Cloudy, yellowed lenses restored to crystal clarity for safer night driving and a fresher front end.",
  },
] as const;

export const testimonials = [
  {
    name: "Marcus D.",
    role: "Brickell, Miami",
    quote:
      "Showed up to my building on time, took a beat-up daily driver and gave it back looking better than when I bought it. Insanely good.",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Sofia R.",
    role: "Coral Gables",
    quote:
      "Booked the ceramic coating package for my G-Wagon. Six months in, water still beads off it like the first day. Worth every dollar.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Andre T.",
    role: "Wynwood",
    quote:
      "Most professional detail team in Miami, period. They treated my 911 like it was theirs. Will not let anyone else touch my cars.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Camila V.",
    role: "South Beach",
    quote:
      "The interior deep clean was unreal. They removed stains I'd given up on. Truck smells brand new again.",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
] as const;

export const process = [
  { step: "01", title: "Book Appointment", text: "Tell us your vehicle and preferred slot. We confirm within the hour." },
  { step: "02", title: "Vehicle Inspection", text: "On arrival we walk you through paint condition, interior, and the right package." },
  { step: "03", title: "Professional Detailing", text: "Premium products, certified techs, zero shortcuts — at your driveway." },
  { step: "04", title: "Final Perfection Check", text: "Multi-point inspection under LED inspection lights. We don't leave until it's perfect." },
] as const;

export const whyUs = [
  { title: "Professional Equipment", text: "Hospital-grade extractors, dual-action polishers, steam systems." },
  { title: "Mobile Convenience", text: "We come to your home, office or marina across Miami-Dade." },
  { title: "Experienced Technicians", text: "Years of luxury, exotic and daily-driver detailing experience." },
  { title: "Premium Ceramic Protection", text: "9H certified coatings with multi-year warranty." },
  { title: "100% Satisfaction", text: "If you're not floored by the result, we make it right. Period." },
] as const;