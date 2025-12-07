"use client";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({
        email: "",
        message: "",
    });

    // honeypot field
    const [website, setWebsite] = useState("");

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const checkFormIsValid = () => {
        let isValid = true;
        const newErrors: { email?: string; message?: string } = {
            email: "",
            message: "",
        };

        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!isValidEmail(email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        }

        if (!message) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (website !== "") return false; // bot detected

        const formIsValid = checkFormIsValid();
        if (formIsValid) {
            try {
                setIsSubmitting(true);
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                });

                if (!response.ok) {
                    throw new Error("Failed to send message");
                }

                const data = await response.json();
                console.log("Success:", data);
                setStatusMessage("Message sent successfully");
                setShowForm(false);
            } catch (error) {
                console.error("Error:", error);
                setStatusMessage("Failed to send message");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleSendAnotherMessage = () => {
        setShowForm(true);
        setStatusMessage("");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({ email: "", message: "" });
    };

    return (
        <div>
            {!showForm && statusMessage && (
                <div>
                    <p>{statusMessage}</p>
                    <button onClick={handleSendAnotherMessage}>
                        send another message
                    </button>
                </div>
            )}
            {showForm && (
                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>{errors.email}</p>

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <p>{errors.message}</p>

                    <p>{statusMessage}</p>
                    <button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                        Submit
                    </button>

                    <input
                        type="text"
                        name="website"
                        style={{display : 'none'}}
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        aria-label="website"
                    />
                </form>
            )}
        </div>
    );
}
