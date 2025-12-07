import { render, screen, within } from "@testing-library/react";
import Experience from "./Experience";
import experienceData from "@/data/json/timeline.json";

describe("Experience Component", () => {
    it("renders without crashing", () => {
        render(<Experience />);
    });

    it("uses semantic section element", () => {
        const { container } = render(<Experience />);
        const section = container.querySelector("section");
        expect(section).toBeInTheDocument();
    });

    it("renders the heading", () => {
        render(<Experience />);
        const heading = screen.getByRole("heading", { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Experience");
    });

    it("renders major timeline entries", () => {
        render(<Experience />);
        expect(screen.getByText("Beyable")).toBeInTheDocument();
        expect(screen.getByText("Aircall")).toBeInTheDocument();
    });

    it("renders complete information for each entry", () => {
        render(<Experience />);
        experienceData.timeline.forEach((entry) => {
            const entryElement = screen.getByText(entry.company).closest("div");
            if (!entryElement) {
                throw new Error(`Could not find container for ${entry.company}`);
            }
            expect(within(entryElement).getByText(entry.role)).toBeInTheDocument();
            expect(within(entryElement).getByText(entry.company)).toBeInTheDocument();
            expect(within(entryElement).getByText(entry.dateRange)).toBeInTheDocument();
            entry.highlights.forEach((h) => expect(within(entryElement).getByText(h)).toBeInTheDocument());
        });
    });
});
