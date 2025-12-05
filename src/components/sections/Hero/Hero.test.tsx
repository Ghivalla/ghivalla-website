import { screen, render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
    it("renders without crashing", () => {
        render(<Hero />);
    });

    it("renders main heading", () => {
        render(<Hero />);
        const heading = screen.getByRole("heading", { level: 1 });
        expect(heading).toBeInTheDocument();
    });

    it("renders CTA buttons with correct links", () => {
        render(<Hero />);
        const links = [ "projects", "contact" ];
        links.forEach((linkText) => {
            const link = screen.getByRole("link", { name: linkText });
            expect(link).toHaveAttribute("href", `#${linkText}`);
        });
    });

    it("renders portrait image with alt text", () => {
        render(<Hero />);
        const image = screen.getByRole("img");
        expect(image.getAttribute("alt")).toBeTruthy();
    });
});
