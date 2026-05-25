## Camden Auto Detail Experts — Miami

A cinematic, luxury automotive site with a black / dark gray / metallic silver / deep red palette, glassmorphism surfaces, glossy CTAs, and smooth motion.

### Design direction
Before building, I'll generate 3 rendered design directions (all locked to the luxury Miami automotive aesthetic — black/silver/red, glassmorphism, aggressive sporty type) varying composition, density, and motion register. You pick one and I build it faithfully.

Tokens locked into `src/styles.css`:
- Background `#0a0a0a`, surface `#141414`, metallic silver `#c9ccd1`, deep red accent `#c8102e` with glow variant
- Aggressive display font (e.g. Bebas Neue / Archivo Black) + clean body (Inter / Barlow)
- Glassmorphism utility, red glow shadows, gradient borders

### Route architecture (separate routes, per-page SEO)
```
src/routes/
  __root.tsx         site shell, fonts, sticky WhatsApp, scroll setup
  index.tsx          Home: Hero + About teaser + Services preview + Before/After + Why Us + Process + Testimonials + Booking CTA
  services.tsx       Full services grid with details
  gallery.tsx        Before/After comparison slider gallery
  about.tsx          Story, mobile coverage, team
  booking.tsx        Full booking form
  contact.tsx        Phone, WhatsApp, social, Google Maps embed
```
Each route gets unique `head()` meta targeting "Miami Car Detailing", "Mobile Detailing Miami", "Ceramic Coating Miami", "Auto Detail Experts Miami". JSON-LD `LocalBusiness` on home, `Service` schema on services.

### Sections (on home unless noted)
1. **Hero** — fullscreen, cinematic car visual with dark overlay + red glow, animated particles/water shimmer, headline "WE DON'T JUST CLEAN — WE TRANSFORM", sub "Premium Mobile Car Detailing Services in Miami, FL", two CTAs (Book Appointment / View Services), 4 floating glass trust badges.
2. **About** — premium narrative, mobile-across-Miami emphasis, icon cards.
3. **Services** — 8 glass cards with icons, hover red glow lift: Full Detail, Paint Correction, Clay Bar, Engine Bay, Ceramic Coating, Interior Deep Cleaning, Exterior Wash, Headlight Restoration.
4. **Before/After Gallery** — interactive drag slider comparison component, 3–4 showcases.
5. **Why Choose Us** — 5 feature tiles (equipment, mobile convenience, technicians, ceramic protection, satisfaction).
6. **Process** — animated 4-step vertical/horizontal timeline.
7. **Testimonials** — glowing review cards with avatars, subtle marquee/carousel.
8. **Booking form** — name, phone, vehicle type, service, preferred date (shadcn date picker), message; Zod validation; submits to Lovable Cloud (see below) with success toast.
9. **Contact** — Miami address, click-to-call, WhatsApp deep link, Instagram + Facebook, Google Maps iframe embed.
10. **Footer** — dark luxury footer: quick links, services, social, contact, copyright.

### Special features
- Sticky floating WhatsApp button (all pages)
- Smooth scroll + parallax hero
- Framer-motion fade/scale/slide on scroll
- Page-load intro animation
- Mobile-first responsive
- SEO meta + JSON-LD per route, sitemap-friendly relative canonicals
- robots.txt allowing all

### Booking backend
Enable **Lovable Cloud** to persist bookings in a `bookings` table (RLS: public insert, no public read) so submissions aren't lost. If you'd rather keep this static (mailto/WhatsApp only, no DB), tell me and I'll skip Cloud.

### Out of scope (ask if needed)
- Real photography — I'll generate luxury car imagery via the image tool; replace later with real shots.
- Payment processing for deposits — not included unless requested.

### Build flow
1. Generate 3 design directions → you pick one.
2. Set up tokens, fonts, layout shell, sticky WhatsApp.
3. Build routes + sections in the chosen direction.
4. Generate hero + gallery imagery.
5. Wire booking form (Cloud if approved).
6. SEO meta + JSON-LD pass.
