'use client';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    // Detect screen size
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-zinc-200 dark:border-zinc-800">
            <nav aria-label="Main navigation" className="min-h-[72px] flex flex-row justify-between items-center container mx-auto py-4 px-4">
                <div>
                    <a href="/" className="text-body-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500 rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-semibold">
                        Ghivalla
                    </a>
                </div>
                <div>
                    {!isMenuOpen &&
                        <button className="md:hidden flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500"
                            aria-label="Open menu"
                            onClick={() => setIsMenuOpen(true)}>
                            <Menu/>
                            <span >Menu</span>
                        </button>
                    }

                    { isMenuOpen && (
                        <motion.div 
                            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
                            data-testid="menu-backdrop"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}

                    <motion.ul
                        aria-label="Mobile menu"
                        aria-hidden={!isMenuOpen}
                        className="list-none fixed top-0 right-0 h-screen w-[85vw] max-w-sm bg-background border-l border-zinc-200 dark:border-zinc-800 flex flex-col gap-6 p-6 z-50 md:static md:w-auto md:max-w-none md:h-auto md:flex-row md:gap-6 md:p-0 md:bg-transparent md:border-0"
                        animate={isMobile ? { x: isMenuOpen ? 0 : '100%' } : { x: 0 }}
                        initial={isMobile ? { x: '100%' } : { x: 0 }}
                        transition={isMobile ? { type: 'tween', duration: 0.3 } : {}}
                    >
                        <li className="md:hidden">
                            <button className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500"
                                aria-label="Close menu"
                                onClick={() => setIsMenuOpen(false)}>
                                <X/>
                                <span >Close</span>
                            </button>
                        </li>
                        {
                            links.map((link) => (<li key={link.name}>
                                <a 
                                    className="text-body px-3 py-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500"
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                 >
                                    {link.name}
                                </a>
                            </li>))
                        }
                    </motion.ul>
                </div>
            </nav>
        </header>
    );
}
