import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "./Projects";
import projectsData from "@/data/projects.json";

describe("Projects Component", () => {
    const visibleProjects = projectsData.filter(p => !p.hide);

    it("renders the section heading", () => {
        render(<Projects />);
        const heading = screen.getByRole("heading", { name: /projects/i });
        expect(heading).toBeInTheDocument();
    });

    it("renders all visible projects from data", () => {
        render(<Projects />);
        const projectCards = screen.getAllByRole("article");
        expect(projectCards).toHaveLength(visibleProjects.length);
    });

    it("renders technology badges", () => {
        render(<Projects />);

        visibleProjects.forEach((project) => {
            const projectHeading = screen.getByText(project.title);
            const projectCard = projectHeading.closest("article");

            if (!projectCard) {
                throw new Error(`${project.title} card not found`);
            }

            const cardQueries = within(projectCard);
            project.technologies.forEach((tech) => {
                expect(cardQueries.getByText(tech)).toBeInTheDocument();
            });
        });
    });

    it("renders images with correct alt text", () => {
        render(<Projects />);

        visibleProjects.forEach((project) => {
            const projectHeading = screen.getByText(project.title);
            const projectCard = projectHeading.closest("article");

            if (!projectCard) {
                throw new Error(`${project.title} card not found`);
            }
            const image = within(projectCard).getByRole("img", { name: project.title  });
            expect(image).toBeInTheDocument();
        });
    });

    it("applies grayscale filter to images", () => {
        const { container } = render(<Projects />);
        const grayscaleContainers = container.querySelectorAll(".grayscale");
        expect(grayscaleContainers.length).toBeGreaterThan(0);
    });

    it("shows demo link when demoUrl exists", () => {
        render(<Projects />);
        visibleProjects.forEach((project) => {
            const projectHeading = screen.getByText(project.title);
            const projectCard = projectHeading.closest("article");

            if(!projectCard) {
                throw new Error(`${project.title} card not found`);
            }

            const demoLink = within(projectCard).queryByRole("link", { name: /view live demo/i  });
            if (project.demoUrl) {
                expect(demoLink).toBeInTheDocument();
            } else {
                expect(demoLink).not.toBeInTheDocument();
            }
        });
    });

    it("shows GitHub link when githubUrl exists", () => {
        render(<Projects />);

        visibleProjects.forEach((project) => {
            const projectHeading = screen.getByText(project.title);
            const projectCard = projectHeading.closest("article");

            if(!projectCard) {
                throw new Error(`${project.title} card not found`);
            }
            const githubLink = within(projectCard).queryByRole("link", { name: /view source/i  });
            if (project.githubUrl) {
                expect(githubLink).toBeInTheDocument();
            } else {
                expect(githubLink).not.toBeInTheDocument();
            }
        });
    });

    it("shows context badge when context exists", () => {
        render(<Projects />);

        visibleProjects.forEach((project) => {
            const projectHeading = screen.getByText(project.title);
            const projectCard = projectHeading.closest("article");

            if(!projectCard) {
                throw new Error(`${project.title} card not found`);
            }
            if (project.context) {
                const contextBadge = within(projectCard).queryByText(project.context);
                expect(contextBadge).toBeInTheDocument();
            }
        });
    });

    it("renders projects in a horizontal scroll layout", () => {
        const { container } = render(<Projects />);
        const scrollContainer = container.querySelector(".overflow-x-auto");
        expect(scrollContainer).toBeInTheDocument();
        expect(scrollContainer).toHaveClass("snap-x");
        expect(scrollContainer).toHaveClass("scrollbar-hide");
    });
});
