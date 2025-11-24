"use client";

import { motion } from "framer-motion";

const silhouettes = [
  {
    id: "nova",
    gradient: "radial-gradient(circle at 30% 20%, rgba(123, 97, 255, 0.8), transparent 62%)"
  },
  {
    id: "echo",
    gradient: "radial-gradient(circle at 70% 30%, rgba(56, 248, 255, 0.7), transparent 60%)"
  },
  {
    id: "lumen",
    gradient: "radial-gradient(circle at 50% 50%, rgba(255, 107, 203, 0.65), transparent 58%)"
  }
];

export function OnboardingScreen() {
  return (
    <section className="relative flex min-h-[720px] w-full flex-col items-center justify-center overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#090715]/90 px-8 py-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#090617]/90 via-transparent to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(123,97,255,0.12), transparent 50%), radial-gradient(circle at 80% 30%, rgba(56,248,255,0.12), transparent 45%)",
            backgroundSize: "140% 140%"
          }}
        />
      </div>

      <div className="relative grid w-full max-w-[480px] gap-6 text-center">
        <div className="flex justify-center gap-6">
          {silhouettes.map((silhouette, index) => (
            <motion.span
              key={silhouette.id}
              className="relative h-32 w-24 rounded-[80px]"
              style={{
                background: silhouette.gradient
              }}
              animate={{ opacity: [0.5, 0.9, 0.6], scale: [0.95, 1.03, 0.98] }}
              transition={{
                duration: 6 + index * 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="absolute inset-x-6 bottom-4 h-10 rounded-full bg-white/10 blur-lg" />
              <motion.span
                className="absolute inset-0 rounded-inherit border border-white/10"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          ))}
        </div>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.34em] text-white/50">Design Arena</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Enter the Arena. Create your narrative.
          </h1>
          <p className="text-base leading-relaxed text-white/70">
            A portal where AI personas come alive through stories, emotions, and immersive chats.
            Step inside, choose your arena, and begin weaving your next chapter.
          </p>
        </div>

        <div className="grid gap-3">
          <button className="relative overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-aura-purple/80 via-aura-magenta/70 to-aura-cyan/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-glow transition duration-300 hover:scale-[1.01]">
            Initiate Arena Access
            <motion.span
              className="absolute inset-0"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.12) 100%)",
                mixBlendMode: "screen"
              }}
            />
          </button>
          <button className="rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/70 transition duration-300 hover:bg-white/[0.1]">
            Preview Arenas
          </button>
        </div>
      </div>
    </section>
  );
}
