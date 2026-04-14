"use client";

import { useEffect, useState } from "react";
import { COMPLAINT_START_DATE } from "@/data/timeline";
import {
  Mail,
  Phone,
  PhoneOff,
  CalendarClock,
} from "lucide-react";

function getDaysSince(start: Date): number {
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

const stats = [
  {
    icon: Mail,
    value: "8+",
    label: "Odeslaných emailů",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Phone,
    value: "4+",
    label: "Telefonátů",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: PhoneOff,
    value: "0",
    label: "Slíbených callbacků splněno",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    highlight: true,
  },
  {
    icon: CalendarClock,
    value: "DAYS",
    label: "Dní čekání",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
];

export function Stats() {
  const [days, setDays] = useState("—");

  useEffect(() => {
    setDays(String(getDaysSince(COMPLAINT_START_DATE)));
  }, []);

  return (
    <section className="bg-zinc-900 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          V číslech
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const displayValue =
              stat.value === "DAYS" ? days : stat.value;

            return (
              <div
                key={stat.label}
                className={`rounded-xl border ${stat.border} ${stat.bg} p-4 text-center transition-all hover:scale-105 sm:p-6`}
              >
                <Icon
                  className={`mx-auto mb-3 h-6 w-6 ${stat.color}`}
                />
                <div
                  className={`text-3xl font-black ${stat.highlight ? "text-red-400" : "text-white"} sm:text-4xl`}
                >
                  {displayValue}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
