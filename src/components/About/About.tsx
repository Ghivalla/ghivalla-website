import { Download } from "lucide-react";
import aboutData from "@/data/json/about.json";


export default function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-20">
            <h2 className="text-h2 text-center mb-16">Who's behind the code ?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                    <p className="text-body-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8">
                        {aboutData.bio}
                    </p>

                    <div className="p-4 bg-zinc-100 dark:bg-zinc-900 border-l-4 border-blue-500 mb-8">
                        <p className="text-body-lg italic text-zinc-800 dark:text-zinc-200">
                            {aboutData.motto}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            key={aboutData.cta.label}
                            href={aboutData.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-zinc-900  dark:text-white font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                            <Download size={20} />
                            {aboutData.cta.label}
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <img
                        src={aboutData.image.src}
                        alt={aboutData.image.alt}
                        className="w-full h-auto max-w-md rounded-lg object-cover shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
