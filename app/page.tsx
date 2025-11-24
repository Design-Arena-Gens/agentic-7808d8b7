'use client';
import { ArenaHub } from "@/components/arena-hub";
import { OnboardingScreen } from "@/components/onboarding-screen";
import { GlowCard } from "@/components/glow-card";
import { motion } from "framer-motion";

const vibes = [
  {
    title: "Emotionally Alive",
    description:
      "Feel the subtle glows, breathing gradients, and responsive UI that mirrors human moods in real time.",
    accent: "magenta" as const
  },
  {
    title: "Story-Centric UX",
    description:
      "Every interaction is framed like a chapter. Personas share hooks, arcs, and emotional cues to guide your journey.",
    accent: "purple" as const
  },
  {
    title: "Immersive Presence",
    description:
      "Ambient soundscapes, shimmering silhouettes, and tactile chat elements make each arena feel tangible.",
    accent: "cyan" as const
  }
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 py-10 sm:px-8 lg:py-16">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(123,97,255,0.08), transparent 60%)"
        }}
      />

      <OnboardingScreen />

      <section className="grid gap-6 md:grid-cols-3">
        {vibes.map((vibe) => (
          <GlowCard key={vibe.title} accent={vibe.accent} className="min-h-[220px]">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/50">Design Pillar</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{vibe.title}</h3>
              </div>
              <p className="text-sm text-white/70">{vibe.description}</p>
            </div>
          </GlowCard>
        ))}
      </section>

      <ArenaHub />
    </main>
  );
}
