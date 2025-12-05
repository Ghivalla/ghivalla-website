import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("navigation", () => {
    it("renders without crashing", () => {
        render(<Navigation />);
    });

    it("renders a header element with nav landmark", () => {
        render(<Navigation />);
        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    });

    it("displays the logo/name", () => {
        render(<Navigation />);
        const logo = screen.getByText("Ghivalla");
        expect(logo).toBeInTheDocument();
    });

    it("renders all navigation links", () => {
        render(<Navigation />);
        const links = ['Home', 'Projects', 'About', 'Experience', 'Contact'];
        links.forEach((linkText) => {
            const link = screen.getByRole("link", {name: linkText });
            expect(link).toBeInTheDocument();
        });
    });
});
