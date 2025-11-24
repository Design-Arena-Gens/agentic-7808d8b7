"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { PiSparkleFill } from "react-icons/pi";

type ArenaCardProps = {
  title: string;
  tagline: string;
  personas: {
    name: string;
    role: string;
    mood: string;
    gradient: string;
  }[];
  ambient: string;
  accent: "purple" | "cyan" | "magenta";
  className?: string;
};

export function ArenaCard({
  title,
  tagline,
  personas,
  ambient,
  accent,
  className
}: ArenaCardProps) {
  return (
    <motion.article
      className={cn(
        "group relative flex flex-col gap-6 overflow-hidden rounded-4xl border border-white/8 bg-gradient-to-b",
        accent === "purple" && "from-[#141027]/90 via-[#0A0914]/90 to-[#06040F]/95",
        accent === "cyan" && "from-[#0B1B24]/90 via-[#050B11]/90 to-[#04060A]/95",
        accent === "magenta" && "from-[#25112A]/90 via-[#10040F]/90 to-[#070209]/95",
        "p-6 transition duration-500 hover:border-white/20 hover:shadow-glow",
        className
      )}
      initial={{ opacity: 0, translateY: 32 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="absolute inset-0">
        <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-aura-purple/15 blur-3xl" />
        <div className="absolute -right-20 bottom-4 h-32 w-48 rounded-full bg-aura-cyan/10 blur-3xl" />
        <motion.div
          className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-40"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(123,97,255,0.12), transparent 35%), radial-gradient(circle at 80% 30%, rgba(56,248,255,0.08), transparent 40%)"
          }}
        />
      </div>

      <header className="relative flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-aura-cyan/90 shadow-inner">
          <PiSparkleFill />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">Arena</p>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
        </div>
      </header>

      <p className="text-base text-white/70">{tagline}</p>

      <div className="relative grid gap-4">
        {personas.map((persona) => (
          <motion.div
            key={persona.name}
            className="group/persona relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] p-4 backdrop-blur-md transition duration-300 hover:border-white/20"
            whileHover={{ translateY: -2 }}
          >
            <div
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/10"
              style={{ background: persona.gradient }}
            >
              <motion.span
                className="absolute inset-0 opacity-70"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)"
                }}
              />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backdropFilter: "blur(10px)"
                }}
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{persona.name}</p>
              <p className="text-sm text-white/60">{persona.role}</p>
            </div>
            <span className="ml-auto rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
              {persona.mood}
            </span>
          </motion.div>
        ))}
      </div>

      <footer className="relative flex items-center justify-between rounded-3xl border border-white/5 bg-white/[0.04] p-4 text-sm text-white/70">
        <div>
          <p className="uppercase tracking-[0.2em] text-white/40">Ambient</p>
          <p>{ambient}</p>
        </div>
        <button className="relative overflow-hidden rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition duration-300 hover:bg-white/20">
          Enter
        </button>
      </footer>
    </motion.article>
  );
}
