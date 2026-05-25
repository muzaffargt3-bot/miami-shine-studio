import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  highlight?: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-crimson" />
          <span className="font-cond uppercase tracking-[0.4em] text-xs text-crimson">{eyebrow}</span>
          <span className="h-px w-8 bg-crimson" />
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl tracking-wider metallic-text leading-[0.95]">
        {title}{" "}
        {highlight && <span className="crimson-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}