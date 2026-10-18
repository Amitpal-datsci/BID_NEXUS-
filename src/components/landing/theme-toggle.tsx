"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

const CYCLE = ["light", "dark", "system"] as const;

const emptySubscribe = () => () => {};
const isClient = () => true;
const isServer = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, isClient, isServer);

  const current = (CYCLE as readonly string[]).includes(theme ?? "")
    ? (theme as (typeof CYCLE)[number])
    : "system";
  const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];

  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={() => setTheme(next)}
      className="inline-flex size-9 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"
    >
      {mounted ? (
        <Icon className="size-4" aria-hidden />
      ) : (
        <span className="size-4" aria-hidden />
      )}
    </button>
  );
}
