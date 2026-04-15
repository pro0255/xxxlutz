"use client";

import { useEffect, useState } from "react";
import { COMPLAINT_START_DATE, DEADLINE_DATE, RESOLVED_DATE } from "@/data/timeline";
import { AlertCircle, CheckCircle, Timer, ArrowRight } from "lucide-react";

function getDaysBetween(start: Date, end: Date): number {
  const diff = end.getTime() - start.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function getDaysUntil(target: Date): number {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function CurrentStatus() {
  const [totalDays, setTotalDays] = useState<number | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    setTotalDays(getDaysBetween(COMPLAINT_START_DATE, RESOLVED_DATE));
    setDaysLeft(getDaysUntil(DEADLINE_DATE));
  }, []);

  const deadlinePassed = daysLeft !== null && daysLeft <= 0;

  return (
    <section className="bg-zinc-950 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          Aktuální stav
        </h2>

        {/* Before / After grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* BEFORE — old unresolved state */}
          <div className="relative opacity-60">
            <div className="absolute -top-3 left-4 z-10 rounded-full bg-zinc-800 px-3 py-0.5 text-xs font-semibold text-zinc-400">
              Jak to bylo
            </div>

            {/* Old countdown */}
            <div className="mb-4 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-5 text-center">
              <Timer className="mx-auto mb-2 h-6 w-6 text-orange-400" />
              {deadlinePassed ? (
                <>
                  <div className="text-sm font-semibold text-red-400">
                    Deadline vypršel
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">
                    Firma hrozila zneplatněním reklamace k 19. 4. 2026.
                  </div>
                </>
              ) : (
                <>
                  <div className="text-xs font-medium text-orange-400">
                    Do deadline firmy zbývá
                  </div>
                  <div className="my-1 text-4xl font-black text-white">
                    {daysLeft ?? "—"}
                  </div>
                  <div className="text-xs text-zinc-500">
                    dní (do 19. 4. 2026)
                  </div>
                </>
              )}
            </div>

            {/* Old status */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Nevyřešeno</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-500">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  Polštáře nedodány
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  Firma požaduje vyzvednutí na vlastní náklady
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  Hrozba zneplatnění reklamace do 19. 4. 2026
                </li>
              </ul>
            </div>
          </div>

          {/* AFTER — resolved state */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10 rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-semibold text-green-400">
              Jak to je teď
            </div>

            {/* Total duration */}
            <div className="mb-4 rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-5 text-center">
              <Timer className="mx-auto mb-2 h-6 w-6 text-green-400" />
              <div className="text-xs font-medium text-green-400">
                Celková doba řešení reklamace
              </div>
              <div className="my-1 text-4xl font-black text-white">
                {totalDays ?? "—"}
              </div>
              <div className="text-xs text-zinc-400">
                dní (30. 12. 2025 → 15. 4. 2026)
              </div>
            </div>

            {/* Resolved status */}
            <div className="rounded-2xl border border-green-500/20 bg-zinc-900 p-5">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-sm font-semibold text-green-400">Domluveno</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  Díly budou dovezeny 23. 4. 2026
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  Deadline 19. 4. 2026 už neplatí
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  Děkuji za vstřícné vyřešení
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Arrow between on mobile */}
        <div className="my-4 flex justify-center sm:hidden">
          <ArrowRight className="h-5 w-5 text-zinc-600" />
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
