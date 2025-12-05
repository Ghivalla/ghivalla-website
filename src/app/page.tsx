import { ThemeSelector } from "@/components/theme-selector";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
                <p className="text-zinc-600 dark:text-zinc-400">
                    This is your portfolio homepage.
                </p>
            </main>

            {/* Footer with ThemeSelector */}
            <footer className="border-t border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        © 2025 Ghivalla
                    </p>
                    <ThemeSelector />
                </div>
            </footer>
        </div>
    );
}
