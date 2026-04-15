"use client";

import { useEffect, useState } from "react";
import { COMPLAINT_START_DATE, RESOLVED_DATE } from "@/data/timeline";
import { CheckCircle, Timer } from "lucide-react";

function getDaysBetween(start: Date, end: Date): number {
  const diff = end.getTime() - start.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function CurrentStatus() {
  const [totalDays, setTotalDays] = useState<number | null>(null);

  useEffect(() => {
    setTotalDays(getDaysBetween(COMPLAINT_START_DATE, RESOLVED_DATE));
  }, []);

  return (
    <section className="bg-zinc-950 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          Aktuální stav
        </h2>

        {/* Total duration */}
        <div className="mb-8 rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 text-center sm:p-8">
          <Timer className="mx-auto mb-3 h-8 w-8 text-green-400" />
          <div className="text-sm font-medium text-green-400">
            Celková doba řešení reklamace
          </div>
          <div className="my-2 text-5xl font-black text-white sm:text-6xl">
            {totalDays ?? "—"}
          </div>
          <div className="text-sm text-zinc-400">
            dní (30. 12. 2025 → 15. 4. 2026)
          </div>
        </div>

        {/* Status */}
        <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="font-semibold text-green-400">Domluveno</span>
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Díly budou dovezeny 23. 4. 2026
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Deadline 19. 4. 2026 už neplatí
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
              Děkuji za vstřícné vyřešení
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-8 text-center">
          <p className="text-lg italic text-zinc-500">
            107 dní, desítky emailů a telefonátů. Ale nakonec dohoda.
          </p>
        </div>
      </div>
    </section>
  );
}
