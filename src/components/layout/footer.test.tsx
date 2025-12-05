import {render, screen} from '@testing-library/react';
import {Footer} from './footer';

describe('footer', () => {
    it('renders without crashing', () => {
        render(<Footer />);
    });

    it('renders a footer element with contentinfo landmark', () => {
        render(<Footer />);
        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });

    it('displays copyright text', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        const copyright = screen.getByText(`Ghivalla © ${currentYear}`);
        expect(copyright).toBeInTheDocument();
    });

     it("renders all social links with proper labels", () => {
        render(<Footer />);
        const socialLinks = ['GitHub', 'LinkedIn', 'Mail'];
        socialLinks.forEach((linkLabel) => {
            const link = screen.getByRole('link', { name: `${linkLabel} (opens in a new tab)` });
            expect(link).toBeInTheDocument(); });
    })
});
