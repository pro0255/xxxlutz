import { timelineEvents, type EventType } from "@/data/timeline";
import {
  CheckCircle,
  AlertTriangle,
  Clock,
  Quote,
} from "lucide-react";

const typeConfig: Record<
  EventType,
  { color: string; bg: string; border: string; icon: typeof CheckCircle; dotBg: string }
> = {
  action: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    icon: CheckCircle,
    dotBg: "bg-emerald-500",
  },
  problem: {
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    icon: AlertTriangle,
    dotBg: "bg-red-500",
  },
  waiting: {
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    icon: Clock,
    dotBg: "bg-amber-500",
  },
};

export function Timeline() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl">
          Chronologie událostí
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 sm:left-1/2 sm:-translate-x-px" />

          {timelineEvents.map((event, i) => {
            const config = typeConfig[event.type];
            const Icon = config.icon;
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className={`relative mb-8 flex items-start sm:mb-12 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center sm:left-1/2">
                  <div
                    className={`h-3 w-3 rounded-full ${config.dotBg} ring-4 ring-zinc-950`}
                  />
                </div>

                {/* Spacer for mobile */}
                <div className="w-10 shrink-0 sm:hidden" />

                {/* Card */}
                <div
                  className={`flex-1 sm:w-[calc(50%-2rem)] ${
                    isLeft ? "sm:pr-10" : "sm:pl-10"
                  }`}
                >
                  <div
                    className={`rounded-xl border ${config.border} ${config.bg} p-4 backdrop-blur-sm transition-all hover:scale-[1.02] sm:p-5`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${config.color}`} />
                      <span className="text-xs font-medium text-zinc-500">
                        {event.date}
                      </span>
                    </div>
                    <h3 className="mb-1 text-base font-semibold text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {event.desc}
                    </p>
                    {event.quote && (
                      <div className="mt-3 flex gap-2 rounded-lg bg-black/30 p-3">
                        <Quote className="mt-0.5 h-3 w-3 shrink-0 text-zinc-600" />
                        <p className="text-xs italic text-zinc-500">
                          {event.quote}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden flex-1 sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
