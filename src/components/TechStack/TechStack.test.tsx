import { screen, render } from '@testing-library/react';
import TechStack from './TechStack';
import techStackData from '@/data/json/techstack.json';

describe('TechStack Component', () => {
    it('render without crashing', () => {
        const { container } = render(<TechStack />);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('renders the section with heading', () => {
        render(<TechStack />);
        const headingElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.textContent).toBe('Tech Stack');
    });

    it('renders all technologies from data', () => {
        render(<TechStack />);
        techStackData.technologies.forEach(tech => {
            const techElement = screen.getByText(tech.name);
            expect(techElement).toBeInTheDocument();
        });
    });

    it('renders key technologies', () => {
        render(<TechStack />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Next.js')).toBeInTheDocument();
        expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();
        expect(screen.getByText('HTML5')).toBeInTheDocument();
        expect(screen.getByText('CSS3')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();

  });
});

