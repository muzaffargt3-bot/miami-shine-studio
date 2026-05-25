import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.1_0.005_0)] border-t border-border/40 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-crimson to-transparent" />

      <div className="container mx-auto px-5 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 red-gradient rounded-sm rotate-45 flex items-center justify-center">
                <Sparkles className="w-4 h-4 -rotate-45 text-white" />
              </div>
              <div className="leading-none">
                <div className="font-display text-2xl tracking-widest metallic-text">CAMDEN</div>
                <div className="font-cond text-[10px] tracking-[0.3em] text-crimson uppercase">Auto Detail Experts</div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Miami's premium mobile car detailing studio on wheels. We bring the showroom to your driveway.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 glass rounded-sm flex items-center justify-center hover:text-crimson hover:border-crimson/60 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 glass rounded-sm flex items-center justify-center hover:text-crimson hover:border-crimson/60 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-widest text-silver mb-5">Quick Links</h3>
            <ul className="space-y-2.5 font-cond uppercase tracking-wider text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/about", label: "About" },
                { to: "/booking", label: "Book" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-crimson transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-widest text-silver mb-5">Services</h3>
            <ul className="space-y-2.5 font-cond uppercase tracking-wider text-sm text-muted-foreground">
              <li>Full Detail</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Interior Deep Clean</li>
              <li>Engine Bay</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg tracking-widest text-silver mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-crimson mt-0.5 shrink-0" /> Miami, Florida — Mobile service across Miami-Dade</li>
              <li><a href="tel:+13055550199" className="flex items-center gap-2.5 hover:text-crimson"><Phone className="w-4 h-4 text-crimson" /> (305) 555-0199</a></li>
              <li><a href="mailto:book@camdenautodetail.com" className="flex items-center gap-2.5 hover:text-crimson"><Mail className="w-4 h-4 text-crimson" /> book@camdenautodetail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-cond uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Camden Auto Detail Experts USA — Miami. All rights reserved.</p>
          <p>Premium Mobile Detailing • Miami, FL</p>
        </div>
      </div>
    </footer>
  );
}