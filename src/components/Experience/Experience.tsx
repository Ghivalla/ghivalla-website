import experienceData from "@/data/json/timeline.json";

export default function Experience() {
    return (
        <section id="experience" className="container mx-auto px-4 py-20">
            <h2 className="text-h2 text-center mb-16">Experience</h2>

            {/* Timeline container - left-aligned on mobile, centered vertical line on desktop */}
            <div className="relative">
                {/* Vertical line - extends from first to last dot */}
                <div className="absolute left-0 md:left-1/2 top-2 bottom-0 w-0.5 border-l-2 border-dashed border-zinc-300 dark:border-zinc-700" />

                <div className="space-y-12">
                    {experienceData.timeline.map((entry, index) => {
                        const isLeft = index % 2 === 0;
                        const isLast = index === experienceData.timeline.length - 1;
                        return (
                            <div
                                key={entry.id}
                                className="relative md:grid md:grid-cols-2 md:gap-16"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-2 -translate-x-1/2 md:left-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-background" />

                                {/* Line stopper - hides line below last dot */}
                                {isLast && (
                                    <div className="absolute left-0 md:left-1/2 top-6 bottom-0 w-1 -translate-x-1/2 bg-background" />
                                )}

                            {/* Content card with max-width and visual grouping */}
                            <div className={`pl-8 md:pl-0 max-w-md ${isLeft ? 'md:col-start-1 md:pr-8 md:ml-auto' : 'md:col-start-2 md:pl-8'}`}>
                                <div className="p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 md:border md:border-zinc-200 md:dark:border-zinc-800">
                                    <h3 className="text-h3 mb-1 text-left">{entry.role}</h3>
                                    <p className="text-body text-zinc-600 dark:text-zinc-400 mb-1 text-left">{entry.company}</p>
                                    <p className="text-caption text-zinc-500 dark:text-zinc-500 mb-4 text-left">{entry.dateRange}</p>
                                    <ul className="space-y-2 list-none text-body-lg text-zinc-700 dark:text-zinc-300 text-left">
                                        {entry.highlights.map((highlight) => (
                                            <li key={highlight}>{highlight}</li>
                                        ))}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
