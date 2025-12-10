import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        const links = ["Home", "Projects", "About", "Experience", "Contact"];
        links.forEach((linkText) => {
            // Links are in aria-hidden drawer, so use { hidden: true }
            const link = screen.getByRole("link", { name: linkText, hidden: true });
            expect(link).toBeInTheDocument();
        });
    });

    it("shows mobile menu button", () => {
        render(<Navigation />);
        const menuButton = screen.getByRole("button", { name: /open menu/i });
        expect(menuButton).toBeInTheDocument();
    });

    it("toggles mobile menu on button click", async () => {
        render(<Navigation />);
        const user = userEvent.setup();
        const openMenuButton = screen.getByRole("button", { name: /open menu/i });
        expect(openMenuButton).toBeInTheDocument();
        await user.click(openMenuButton);
        const closeMenuButton = screen.getByRole("button", { name: /close menu/i });
        expect(closeMenuButton).toBeInTheDocument();
        await user.click(closeMenuButton);
        expect(
            screen.getByRole("button", { name: /open menu/i }),
        ).toBeInTheDocument();
    });

    it("mobile drawer shows and hides navigation links", async () => {
        render(<Navigation />);
        const user = userEvent.setup();

        const drawer = screen.getByLabelText("Mobile menu");
        expect(drawer).toHaveAttribute("aria-hidden", "true");

        const openMenuButton = screen.getByRole("button", { name: /open menu/i });
        await user.click(openMenuButton);
        expect(drawer).toHaveAttribute("aria-hidden", "false");

        const closeMenuButton = screen.getByRole("button", { name: /close menu/i });
        await user.click(closeMenuButton);
        expect(drawer).toHaveAttribute("aria-hidden", "true");
    });

    it("shows backdrop overlay when menu opens and closes menu when backdrop is clicked", async () => {
        render(<Navigation />);
        const user = userEvent.setup();
        expect(screen.queryByTestId("menu-backdrop")).not.toBeInTheDocument();

        const openButton = screen.getByRole("button", { name: /open menu/i });
        await user.click(openButton);
        const backdrop = screen.getByTestId("menu-backdrop");
        expect(backdrop).toBeInTheDocument();

        await user.click(backdrop);
        expect(screen.queryByTestId("menu-backdrop")).not.toBeInTheDocument();
        const drawer = screen.getByLabelText("Mobile menu");
        expect(drawer).toHaveAttribute("aria-hidden", "true");
    });
});
