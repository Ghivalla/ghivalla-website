"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const roles = ["light", "dark", "system"];

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    // Render skeleton with pointer-events-none to prevent interaction during SSR
    if (!mounted) {
        return (
            <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 p-1 dark:border-zinc-800 dark:bg-zinc-950">
                {roles.map((role) => {
                    const Icon = themeIcons[role as keyof typeof themeIcons];
                    return (
                        <button key={role} disabled className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-400 cursor-default">
                            <Icon size={18} />
                            <span className="sr-only">{role}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div role="radiogroup" aria-label="Choose display theme" className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 p-1 dark:border-zinc-800 dark:bg-zinc-95">
            {roles.map((role) => {
                const Icon = themeIcons[role as keyof typeof themeIcons];
                return (
                    <button
                        role="radio"
                        aria-checked={theme === role}
                        onClick={() => changeTheme(role)}
                        key={role}
                        className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500 ${theme === role ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 pointer-events-none' : 'text-zinc-700 dark:text-zinc-400'}`} 
                    >
                        <Icon size={18}/>
                        <span className="sr-only">{role}</span>
                    </button>
                );
            })}
        </div>
    );
}
