"use client";

import { useEffect, useState } from "react";
import { DEADLINE_DATE } from "@/data/timeline";
import { AlertCircle, Timer } from "lucide-react";

function getDaysUntil(target: Date): number {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export function CurrentStatus() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    setDaysLeft(getDaysUntil(DEADLINE_DATE));
  }, []);

  const deadlinePassed = daysLeft !== null && daysLeft <= 0;

  return (
    <section className="bg-zinc-950 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          Aktuální stav
        </h2>

        {/* Deadline counter */}
        <div className="mb-8 rounded-2xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 text-center sm:p-8">
          <Timer className="mx-auto mb-3 h-8 w-8 text-orange-400" />
          {deadlinePassed ? (
            <>
              <div className="text-lg font-semibold text-red-400">
                Deadline vypršel
              </div>
              <div className="mt-1 text-sm text-zinc-400">
                Firma hrozila zneplatněním reklamace k 19. 4. 2026.
              </div>
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-orange-400">
                Do deadline firmy zbývá
              </div>
              <div className="my-2 text-5xl font-black text-white sm:text-6xl">
                {daysLeft ?? "—"}
              </div>
              <div className="text-sm text-zinc-400">
                dní (do 19. 4. 2026)
              </div>
            </>
          )}
        </div>

        {/* Status */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span className="font-semibold text-red-400">Nevyřešeno</span>
          </div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              Pohovka stále s flekem, polštáře nedodány
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              Firma požaduje, abych si reklamaci vyzvedl na vlastní náklady na
              skladu v Čestlicích
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              Firma hrozí zneplatněním reklamace pokud si nedíly nevyzvednu do
              19. 4. 2026
            </li>
          </ul>
        </div>

        {/* Sarcastic conclusion */}
        <div className="mt-8 text-center">
          <p className="text-lg italic text-zinc-500">
            &ldquo;Vaše spokojenost je pro nás v XXXLutz velmi
            důležitá.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
