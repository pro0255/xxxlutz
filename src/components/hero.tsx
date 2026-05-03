"use client";

import { useEffect, useState } from "react";
import { COMPLAINT_START_DATE, COMPLAINT_END_DATE } from "@/data/timeline";
import { CheckCircle2, Sofa } from "lucide-react";

function getDaysBetween(start: Date, end: Date): number {
  const diff = end.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function Hero() {
  const [days, setDays] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = getDaysBetween(COMPLAINT_START_DATE, COMPLAINT_END_DATE);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08),transparent_70%)]" />
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
          (na)konec vyřešil reklamaci
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
          Koupil jsem pohovku. Přišla bez polštářů. Po pár měsících dorazily.
        </p>
        <div className="inline-flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 px-8 py-5">
          <CheckCircle2 className="h-6 w-6 text-green-400" />
          <div className="text-left">
            <div className="text-sm font-medium text-green-400">
              Dní trvalo vyřízení reklamace
            </div>
            <div className="text-5xl font-black tabular-nums text-white sm:text-6xl">
              {mounted ? days : "—"}
            </div>
            <div className="mt-1 text-xs text-zinc-500">
              30. 12. 2025 → 23. 4. 2026 · vyřešeno
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
