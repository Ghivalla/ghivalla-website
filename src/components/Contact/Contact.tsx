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
        <section id="contact" className="container mx-auto px-4 py-20">
            <h2 className="text-h2 text-center mb-16"> Get in Touch </h2>
            {!showForm && statusMessage && (
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg">
                        <p className="text-body-lg text-green-800 dark:text-green-200">
                            {statusMessage}
                        </p>
                    </div>
                    <button
                        onClick={handleSendAnotherMessage}
                        className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        send another message
                    </button>
                </div>
            )}
            {showForm && (
                <form className="max-w-2xl mx-auto space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-body font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <div className="min-h-[20px]"></div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-body font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.email ? "border-red-500 dark:border-red-400" : "border-zinc-300 dark:border-zinc-700"}`}
                        />
                        <p className="min-h-[20px] text-sm text-red-500 dark:text-red-400">
                            {errors.email}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-body font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] resize-y ${errors.message ? "border-red-500 dark:border-red-400" : "border-zinc-300 dark:border-zinc-700"}`}
                        ></textarea>
                        <p className="min-h-[20px] text-sm text-red-500 dark:text-red-400">
                            {errors.message}
                        </p>
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full md:w-fit px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Submit
                    </button>

                    <input
                        type="text"
                        name="website"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        aria-label="website"
                    />

                    <div className="min-h-[60px]">
                        {statusMessage && (
                            <div
                                className={`p-4 rounded-lg border-l-4 ${statusMessage.includes("successfully") ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200" : "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200"}`}
                            >
                                <p className="text-body">{statusMessage}</p>
                            </div>
                        )}
                    </div>
                </form>
            )}
        </section>
    );
}
