
import { Hero } from '@/components/sections/hero';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Hero />
                {/* Future sections: Projects, About, Experience, Contact */}
            </main>
        </div>
    );
}
