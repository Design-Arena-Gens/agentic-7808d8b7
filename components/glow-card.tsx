import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  accent?: "purple" | "cyan" | "magenta";
};

const accentMap: Record<NonNullable<GlowCardProps["accent"]>, string> = {
  purple: "from-aura-purple/40 via-aura-purple/20 to-transparent",
  cyan: "from-aura-cyan/40 via-aura-cyan/20 to-transparent",
  magenta: "from-aura-magenta/40 via-aura-magenta/20 to-transparent"
};

export function GlowCard({ className, accent = "purple", children, ...props }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/8 bg-slate-900/20 p-[1px]",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-gradient-to-b",
        accentMap[accent],
        className
      )}
      {...props}
    >
      <div className="relative h-full w-full rounded-[inherit] bg-[#0B0A14]/90 p-6 backdrop-blur-xl">
        <div className="absolute inset-0 rounded-[inherit] border border-white/5" />
        <div className="absolute -left-24 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-aura-purple/20 blur-3xl" />
        <div className="absolute -right-16 top-10 h-24 w-24 rounded-full bg-aura-cyan/25 blur-3xl" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
