import { render, screen } from '@testing-library/react';
import About from './About';
import aboutData from '@/data/json/about.json';

describe('About Component', () => {
    it('renders without crashing', () => {
        render(<About />);
    });
    
    it('uses semantic section element', () => {
        const { container } = render(<About/>);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('renders the heading', () => {
        render(<About/>);
        const headingElement = screen.getByRole('heading', { level: 2 });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement.textContent).toBe("Who's behind the code ?");
    });

    it('renders bio content', () => {
        render(<About/>);
        const bioText = screen.getByText(aboutData.bio);
        expect(bioText).toBeInTheDocument();
    });
    
    it('render CTA buttons', () => {
        render(<About/>);
        const ctaElement = screen.getByRole('link', { name: aboutData.cta.label });
        expect(ctaElement).toBeInTheDocument();
        expect(ctaElement).toHaveAttribute('href', '/ghivalla-soumar-resume.pdf');
        expect(ctaElement).toHaveAttribute('target', '_blank');
    });

    it('renders portrait image with correct alt text', () => {
        render(<About/>);
        const image = screen.getByRole('img', { name: aboutData.image.alt});
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', aboutData.image.src);
    });
});
