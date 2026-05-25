import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/booking", label: "Book" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong py-3 border-b border-border/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 red-gradient rounded-sm rotate-45 flex items-center justify-center group-hover:rotate-[135deg] transition-transform duration-700">
              <Sparkles className="w-4 h-4 -rotate-45 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-none">
            <div className="font-display text-xl tracking-widest metallic-text">CAMDEN</div>
            <div className="font-cond text-[10px] tracking-[0.3em] text-crimson uppercase">Auto Detail • Miami</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-cond uppercase tracking-widest text-sm px-4 py-2 text-silver hover:text-crimson transition-colors relative group"
              activeProps={{ className: "text-crimson" }}
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-crimson scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden lg:inline-flex items-center gap-2 red-gradient text-white font-cond uppercase tracking-widest text-sm px-6 py-2.5 rounded-sm glow-red-hover"
        >
          Book Now
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden text-silver p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border/40 px-5 py-6 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-cond uppercase tracking-widest text-base py-2 text-silver hover:text-crimson"
                activeProps={{ className: "text-crimson" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-3 red-gradient text-white font-cond uppercase tracking-widest text-sm px-6 py-3 rounded-sm text-center"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}