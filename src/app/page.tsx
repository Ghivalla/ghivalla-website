
import Hero from '@/components/sections/Hero';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import Experience from '@/components/Experience';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Hero />
                <TechStack />
                <About />
                <Experience />
            </main>
        </div>
    );
}
