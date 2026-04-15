"use client";

import { useEffect, useState } from "react";
import {
  COMPLAINT_START_DATE,
  DEADLINE_DATE,
  RESOLVED_DATE,
} from "@/data/timeline";
import { AlertCircle, ArrowRight, CheckCircle, Timer } from "lucide-react";

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
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
          Aktuální stav
        </h2>

        {/* Single card with before/after */}
        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="grid sm:grid-cols-[1fr_auto_1fr]">
            {/* BEFORE */}
            <div className="p-6 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span className="text-xs font-medium text-zinc-400">
                  Jak to bylo
                </span>
              </div>

              {/* Counter */}
              <div className="mb-5 rounded-xl bg-zinc-950/80 p-4 text-center">
                <Timer className="mx-auto mb-1.5 h-5 w-5 text-orange-400/60" />
                {deadlinePassed ? (
                  <>
                    <div className="text-xs font-semibold text-red-400/70">
                      Deadline vypršel
                    </div>
                    <div className="mt-1 text-[11px] text-zinc-600">
                      Firma hrozila zneplatněním k 19. 4. 2026
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[11px] font-medium text-orange-400/60">
                      Do deadline firmy zbývá
                    </div>
                    <div className="my-0.5 text-3xl font-black text-zinc-500">
                      {daysLeft ?? "—"}
                    </div>
                    <div className="text-[11px] text-zinc-600">
                      dní (do 19. 4. 2026)
                    </div>
                  </>
                )}
              </div>

              {/* Status items */}
              <div className="mb-3 flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 text-red-400/60" />
                <span className="text-xs font-semibold text-red-400/60">
                  Nevyřešeno
                </span>
              </div>
              <ul className="space-y-2 text-[11px] text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-500/40" />
                  Polštáře nedodány
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-500/40" />
                  Vyzvednutí na vlastní náklady
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-orange-500/40" />
                  Hrozba zneplatnění do 19. 4.
                </li>
              </ul>
            </div>

            {/* Divider + Arrow */}
            <div className="flex items-center justify-center px-1">
              <div className="hidden h-full w-px bg-zinc-800 sm:block" />
              <div className="absolute z-10 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
                <ArrowRight className="h-3.5 w-3.5 text-zinc-500" />
              </div>
            </div>

            {/* AFTER */}
            <div className="border-t border-zinc-800 p-6 sm:border-t-0 sm:p-8">
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-green-400">
                  Jak to je teď
                </span>
              </div>

              {/* Counter */}
              <div className="mb-5 rounded-xl bg-green-500/5 ring-1 ring-green-500/10 p-4 text-center">
                <Timer className="mx-auto mb-1.5 h-5 w-5 text-green-400" />
                <div className="text-[11px] font-medium text-green-400">
                  Celková doba řešení
                </div>
                <div className="my-0.5 text-3xl font-black text-white">
                  {totalDays ?? "—"}
                </div>
                <div className="text-[11px] text-zinc-400">
                  dní (30. 12. 2025 → 15. 4. 2026)
                </div>
              </div>

              {/* Status items */}
              <div className="mb-3 flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-green-400" />
                <span className="text-xs font-semibold text-green-400">
                  Domluveno
                </span>
              </div>
              <ul className="space-y-2 text-[11px] text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                  Díly budou dovezeny 23. 4. 2026
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                  Deadline 19. 4. už neplatí
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-500" />
                  Děkuji za vstřícné vyřešení
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-10 text-center">
          <p className="text-base italic text-zinc-500">
            {totalDays ?? 107} dní, desítky emailů a telefonátů. Ale nakonec
            dohoda.
          </p>
        </div>
      </div>
    </section>
  );
}
