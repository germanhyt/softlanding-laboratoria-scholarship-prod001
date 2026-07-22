import { useEffect, useRef, useState } from "react";

export type StatMetric = {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

type Props = {
  metrics: StatMetric[];
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatValue(value: number, end: number) {
  const rounded = Math.round(value);
  // Thousands with comma to match brand copy (10,000)
  if (end >= 1000) {
    return new Intl.NumberFormat("en-US").format(rounded);
  }
  return String(rounded);
}

function StatItem({
  metric,
  delayMs,
}: {
  metric: StatMetric;
  delayMs: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(formatValue(metric.end, metric.end));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();

        const duration = 1600;
        const startAt = performance.now() + delayMs;

        const tick = (now: number) => {
          if (now < startAt) {
            requestAnimationFrame(tick);
            return;
          }
          const t = Math.min(1, (now - startAt) / duration);
          const current = metric.end * easeOutCubic(t);
          setDisplay(formatValue(current, metric.end));
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [metric.end, delayMs]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-brand-magenta tabular-nums leading-tight">
        {metric.prefix ?? ""}
        {display}
        {metric.suffix ?? ""}
      </div>
      <div className="mt-2 text-base font-medium">{metric.label}</div>
    </div>
  );
}

export default function ImpactStats({ metrics }: Props) {
  return (
    <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
      {metrics.map((metric, i) => (
        <StatItem key={metric.label} metric={metric} delayMs={i * 120} />
      ))}
    </div>
  );
}
