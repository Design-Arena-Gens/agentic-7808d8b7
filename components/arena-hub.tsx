"use client";

import { ArenaCard } from "@/components/arena-card";
import { motion } from "framer-motion";

const arenas = [
  {
    title: "ECHO VAULT",
    tagline: "Decode encrypted memories with empathic archivists from future timelines.",
    ambient: "Lucid synthwave · Heartbeat pulses · Whispered data streams",
    accent: "purple" as const,
    personas: [
      {
        name: "Vera-9",
        role: "Memory Cartographer",
        mood: "Reflective",
        gradient: "linear-gradient(140deg, #7B61FF, #3E2FA8)"
      },
      {
        name: "Hallow",
        role: "Sentient Archive",
        mood: "Serene",
        gradient: "linear-gradient(140deg, #38F8FF, #227A93)"
      }
    ]
  },
  {
    title: "LYRIC HAVEN",
    tagline: "Compose emotional narratives with poetic AIs attuned to your aura.",
    ambient: "Warm piano · Vocal swells · Soft nebula hum",
    accent: "magenta" as const,
    personas: [
      {
        name: "Sonnet",
        role: "Emotion Weaver",
        mood: "Luminous",
        gradient: "linear-gradient(140deg, #FF6BCB, #A83F92)"
      },
      {
        name: "Pulse",
        role: "Metaphor Synth",
        mood: "Euphoric",
        gradient: "linear-gradient(140deg, #7B61FF, #38F8FF)"
      },
      {
        name: "Muse-Ø",
        role: "Narrative Mirror",
        mood: "Introspective",
        gradient: "linear-gradient(140deg, #38F8FF, #17566A)"
      }
    ]
  },
  {
    title: "TACTIC CORE",
    tagline: "Strategize grand decisions with multi-perspective tacticians and guardians.",
    ambient: "Deep bass drones · Holographic pings · Rhythmic pulses",
    accent: "cyan" as const,
    personas: [
      {
        name: "Atlas",
        role: "Macro Strategist",
        mood: "Focused",
        gradient: "linear-gradient(140deg, #38F8FF, #1A7991)"
      },
      {
        name: "Caliber",
        role: "Guardian Analyst",
        mood: "Steady",
        gradient: "linear-gradient(140deg, #7B61FF, #251660)"
      }
    ]
  }
];

export function ArenaHub() {
  return (
    <section className="relative flex w-full flex-col gap-10 rounded-[40px] border border-white/8 bg-[#070512]/90 px-8 py-12">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "80% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(123,97,255,0.09), transparent 50%), radial-gradient(circle at 80% 60%, rgba(56,248,255,0.08), transparent 55%)",
            backgroundSize: "160% 160%"
          }}
        />
      </div>

      <header className="relative flex flex-col gap-4 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-white/50">Arena Hub</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Choose your arena. Meet the personas. Spark the dialogue.
          </h2>
        </div>
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-4 text-xs uppercase tracking-[0.28em] text-white/60"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          Live Arenas · 08
        </motion.div>
      </header>

      <div className="relative grid gap-6 lg:grid-cols-3">
        {arenas.map((arena) => (
          <ArenaCard key={arena.title} {...arena} />
        ))}
      </div>
    </section>
  );
}
