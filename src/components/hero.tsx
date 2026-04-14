"use client";

import { useEffect, useState } from "react";
import { COMPLAINT_START_DATE } from "@/data/timeline";
import { Clock, Sofa } from "lucide-react";

function getDaysSince(start: Date): number {
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function Hero() {
  const [days, setDays] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getDaysSince(COMPLAINT_START_DATE);
    // Animate counter
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setDays(current);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-zinc-900 px-4 py-20 text-center sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-center gap-2 text-zinc-500">
          <Sofa className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-widest">
            Příběh jedné pohovky
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Jak{" "}
          <a
            href="https://www.xxxlutz.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent underline decoration-red-500/30 hover:decoration-red-500/60 transition-all"
          >
            XXXLutz
          </a>{" "}
          řeší reklamace
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
          Koupil jsem pohovku. Přišla s flekem a bez polštářů. Od té doby běží
          reklamace, která se zdá být nekonečná.
        </p>
        <div className="inline-flex items-center gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-8 py-5">
          <Clock className="h-6 w-6 text-red-400" />
          <div className="text-left">
            <div className="text-sm font-medium text-red-400">
              Dní od nahlášení reklamace
            </div>
            <div className="text-5xl font-black tabular-nums text-white sm:text-6xl">
              {mounted ? days : "—"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
