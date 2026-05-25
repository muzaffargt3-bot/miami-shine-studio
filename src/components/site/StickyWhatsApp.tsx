import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/13055550199?text=Hi%20Camden%20Auto%20Detail%2C%20I'd%20like%20to%20book%20a%20detail%20in%20Miami."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pulse-glow"
      style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)" }}
    >
      <MessageCircle className="w-6 h-6" fill="white" />
    </a>
  );
}