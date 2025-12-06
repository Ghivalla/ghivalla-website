import techStackData from '@/data/json/techstack.json';

export default function TechStack() {
    return (
        <section className="container mx-auto px-4 py-20" >
            <h2 className="text-h2 text-center mb-12">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techStackData.technologies.map((tech) => (
                    <div key={tech.name} className="flex items-center justify-center p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                        <p className="text-body text-center font-medium text-zinc-700 dark:text-zink-300">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
