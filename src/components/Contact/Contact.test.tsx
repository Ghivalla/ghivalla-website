import { screen, render, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact Component", () => {
    beforeEach(() => vi.clearAllMocks());

    it("renders all labels and inputs", () => {
        render(<Contact />);
        const fields = ["Name", "Email", "Message"];
        fields.forEach((label) => {
            const input = screen.getByLabelText(label);
            expect(input).toBeInTheDocument();
        });
    });

    it("renders submit button", () => {
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: "Submit" });
        expect(submitButton).toBeInTheDocument();
    });

    it("shows error when email is empty on submit", async () => {
        const user = userEvent.setup();
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.click(submitButton);
        const errorMessage =
            screen.queryByText("Email is required") ||
            screen.queryByText("Please enter a valid email");
        expect(errorMessage).toBeInTheDocument();
    });

    it("shows error when message is empty on submit", async () => {
        const user = userEvent.setup();
        render(<Contact />);
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.click(submitButton);
        expect(await screen.findByText("Message is required")).toBeInTheDocument();
    });

    it("disables submit button during submission", async () => {
        const user = userEvent.setup();
        global.fetch = vi.fn().mockImplementation(() => {
            return new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            ok: true,
                            json: async () => ({ success: true }),
                        } as Response),
                    100,
                ),
            );
        });
        render(<Contact />);

        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const messageInput = screen.getByLabelText("Message");
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.type(nameInput, "Ghivalla");

        await user.type(emailInput, "ghivalla@gmail.com");
        await user.type(messageInput, "Hello, this is a test message.");
        await user.click(submitButton);

        expect(submitButton).toBeDisabled();
    });

    it("shows error message and keeps form visible when submission fails", async () => {
        const user = userEvent.setup();
        global.fetch = vi.fn().mockImplementation(() => {
            return new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            ok: false,
                            json: async () => ({ error: "server error" }),
                        } as Response),
                    100,
                ),
            );
        });
        render(<Contact />);

        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const messageInput = screen.getByLabelText("Message");
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.type(nameInput, "Ghivalla");

        await user.type(emailInput, "ghivalla@gmail.com");
        await user.type(messageInput, "Hello, this is a test message.");
        await user.click(submitButton);

        // Submit button is disabled during submission
        expect(submitButton).toBeDisabled();
        await waitFor(() => expect(submitButton).not.toBeDisabled());

        // Error message is shown
        expect(
            await screen.findByText("Failed to send message"),
        ).toBeInTheDocument();

        // Form is still visible
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("success message after successful submission", async () => {
        const user = userEvent.setup();
        global.fetch = vi.fn().mockImplementation(() => {
            return new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            ok: true,
                            json: async () => ({ success: true }),
                        } as Response),
                    100,
                ),
            );
        });
        render(<Contact />);

        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const messageInput = screen.getByLabelText("Message");
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.type(nameInput, "Ghivalla");

        await user.type(emailInput, "ghivalla@gmail.com");
        await user.type(messageInput, "Hello, this is a test message.");
        await user.click(submitButton);

        // 1. Success message appears
        expect(
            await screen.findByText("Message sent successfully"),
        ).toBeInTheDocument();

        // 2. Form is hidden (email input should NOT be visible)
        expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();

        // 3. "Send Another Message" button appears
        const resetButton = screen.getByRole("button", {
            name: "send another message",
        });
        expect(resetButton).toBeInTheDocument();

        // 4. Clicking it shows form again
        await user.click(resetButton);
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("rejects submission if honeypot field is filled (bot detection)", async () => {
        const user = userEvent.setup();
        const { container } = render(<Contact />);
        const honeypot = container.querySelector(
            'input[name="website"]',
        ) as HTMLInputElement;
        await user.type(honeypot, "bot-filled-this");
        await user.type(screen.getByLabelText("Email"), "bot@exemplae.com");
        await user.type(screen.getByLabelText("Message"), "This is a bot message.");
        const submitButton = screen.getByRole("button", { name: "Submit" });
        await user.click(submitButton);
        expect(global.fetch).not.toHaveBeenCalled();
    });
});
