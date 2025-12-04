import { render, screen } from "@testing-library/react";
import { ThemeSelector } from "./theme-selector";
import { ThemeProvider } from "@/components/providers/theme-provider";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";
import { vi, type Mock } from "vitest";
import React from "react";

function renderWithThemeProvider(ui: React.ReactElement) {
    return render(<ThemeProvider>{ui}</ThemeProvider>);
}

// Mock next-themes
vi.mock("next-themes", () => ({
    ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
    useTheme: vi.fn(),
}));

describe("ThemeSelector", () => {
    let mockSetTheme: Mock;
    const themes = ["dark", "light", "system"];

    // Reset and setup mock before each test
    beforeEach(() => {
        mockSetTheme = vi.fn();
        vi.mocked(useTheme).mockReturnValue({
            theme: "light",
            setTheme: mockSetTheme,
            systemTheme: undefined,
            themes: ["light", "dark", "system"],
        });
    });

    it("renders without crashing", () => {
        renderWithThemeProvider(<ThemeSelector />);
    });

    it("renders 3 buttons with the role radio", () => {
        renderWithThemeProvider(<ThemeSelector />);
        const button = screen.getAllByRole("radio");
        expect(button.length).toBe(3);
    });

    it("has accessible sentence case name for all roles", () => {
        renderWithThemeProvider(<ThemeSelector />);
        themes.forEach((role) => {
            const element = screen.getByRole("radio", { name: role });
            expect(element).toBeTruthy();
        });
    });

    themes.forEach((theme, index) => {
        it(`calls setTheme with "${theme}" when ${theme} theme button is clicked`, async () => {
            // Set starting theme to something different than the button being tested
            const startingTheme = themes[(index + 1) % themes.length];

            mockSetTheme = vi.fn();
            vi.mocked(useTheme).mockReturnValue({
                theme: startingTheme,
                setTheme: mockSetTheme,
                systemTheme: undefined,
                themes: ["light", "dark", "system"],
            });

            renderWithThemeProvider(<ThemeSelector />);
            const button = screen.getByRole("radio", { name: theme });
            await userEvent.click(button);
            expect(mockSetTheme).toHaveBeenCalledWith(theme);
        });
    });

    themes.forEach((theme) => {
        it(`sets aria-checked="true" on ${theme} button when theme is ${theme}`, async () => {
            mockSetTheme = vi.fn();
            vi.mocked(useTheme).mockReturnValue({
                theme: theme,
                setTheme: mockSetTheme,
                systemTheme: undefined,
                themes: ["light", "dark", "system"],
            });

            renderWithThemeProvider(<ThemeSelector />);
            const button = screen.getByRole("radio", { name: theme });
            expect(button).toHaveAttribute('aria-checked', 'true')

            const otherThemes = themes.filter(t => t !== theme);
            otherThemes.forEach(otherTheme => {
                const otherButton = screen.getByRole("radio", { name: otherTheme });
                expect(otherButton).toHaveAttribute('aria-checked', 'false');
            });

        });
    });
});

