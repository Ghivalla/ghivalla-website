import ProjectData from '@/data/projects.json';
import Image from 'next/image';

export default function Projects() {

    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-h2 text-center mb-12">Projects</h2>
                <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide">
                        {ProjectData
                            .filter(project => !project.hide)
                            .map((project) => (
                            <article
                                key={project.id}
                                className="bg-background border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[30vw] snap-start group"
                            >
                                <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                                    <Image fill src={project.image} alt={project.title} className="object-cover" />
                                </div>
                                <div className="p-6 space-y-4">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    {project.context && <p className="text-sm text-muted-foreground">{project.context}</p>}
                                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 pt-2">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium hover:underline"
                                            >
                                                View Live Demo →
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium hover:underline"
                                            >
                                                View Source →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
            </div>
        </section>
    );
}
