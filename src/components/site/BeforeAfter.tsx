import { useRef, useState, useCallback, useEffect } from "react";

export function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const update = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const stop = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, update]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-md select-none cursor-ew-resize glass"
      onMouseDown={(e) => { setDragging(true); update(e.clientX); }}
      onTouchStart={(e) => { setDragging(true); update(e.touches[0].clientX); }}
    >
      <img src={after} alt={`${label ?? "Detail"} - after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${label ?? "Detail"} - before`} className="absolute inset-0 h-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: "none" }} loading="lazy" />
      </div>
      <div className="absolute top-3 left-3 px-2.5 py-1 glass-strong font-cond uppercase text-[10px] tracking-widest text-silver">Before</div>
      <div className="absolute top-3 right-3 px-2.5 py-1 bg-crimson font-cond uppercase text-[10px] tracking-widest text-white">After</div>
      {label && (
        <div className="absolute bottom-3 left-3 right-3 font-display text-lg text-silver tracking-widest">{label}</div>
      )}
      <div className="absolute top-0 bottom-0 w-0.5 bg-crimson glow-red pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full red-gradient flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor"><path d="M8 5l-5 7 5 7zM16 5l5 7-5 7z"/></svg>
        </div>
      </div>
    </div>
  );
}