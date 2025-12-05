import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="container relative mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left column: Content */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <h1 className="text-display-xl mb-6">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Ghivalla
                        </span>
                    </h1>

                    <p className="text-h3 mb-4 text-zinc-700 dark:text-zinc-300">
                        Transforming ideas into elegant, accessible web experiences
                    </p>

                    <p className="text-caption mb-8 text-zinc-600 dark:text-zinc-400">
                        React • TypeScript • TailwindCSS
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <Button
                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500"
                            asChild
                        >
                            <a aria-label="projects" href="#projects">
                                View Projects
                            </a>
                        </Button>
                        <Button
                            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500"
                            asChild
                            variant="outline"
                        >
                            <a aria-label="contact" href="#contact">
                                Contact
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Right column: Portrait */}
                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src="/images/portrait.png"
                        alt="Ghivalla Soumar - Frontend Developer"
                        className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown
                    className="w-8 h-8 text-zinc-400 dark:text-zinc-600"
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}
