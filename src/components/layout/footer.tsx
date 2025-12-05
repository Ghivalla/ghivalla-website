import { ThemeSelector } from "@/components/theme-selector";
import { Github, Linkedin, Mail } from "lucide-react";
export function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { label: "GitHub", href:"https://github.com/ghivalla", icon: Github },
        { label: "LinkedIn", href:"https://www.linkedin.com/in/ghivalla-soumar-46aa9713b/", icon: Linkedin },
        { label: "Mail", href:"mailto:ghivalla.soumar@gmail.com", icon: Mail }
    ];

    return (
        <footer
            role="contentinfo"
            className="border-t border-zinc-200 dark:border-zinc-800"
        >
            <div className="container mx-auto px-4 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Ghivalla © {currentYear}
                </p>
                <div className="flex items-center space-x-4">
                    <div className="flex space-x-4">
                        { socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                aria-label={`${label} (opens in a new tab)`}
                                href={href}
                                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                key={label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                    <ThemeSelector />
                </div>
            </div>
        </footer>
    );
}
