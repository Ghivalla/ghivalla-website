"use client";
import { useState } from "react";
import { Code2, Rocket, Gauge, Palette, MessageSquare, Briefcase } from "lucide-react";

type ContactFormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

// Contact Information Component
function ContactInfo() {
    return (
        <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
                <p className="text-body-lg leading-relaxed">
                    <strong>Have a project in mind</strong>, a technical challenge to solve, or an opportunity to discuss?
                </p>
                <p className="text-body leading-relaxed">
                    I'm a <strong>Front-End / Full-Stack JavaScript & TypeScript developer</strong> specializing in <em>React</em>, <em>Next.js</em>, <em>performance optimization</em>, and <em>modern UI architectures</em>.
                </p>
                <p className="text-body leading-relaxed">
                    I collaborate with <strong>startups</strong>, <strong>companies</strong>, and <strong>entrepreneurs</strong> to build reliable, scalable, and user-focused web applications, from idea to production.
                </p>
                <div className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <p className="text-body-sm font-medium">
                        I reply fast, usually within <strong>24 hours</strong>.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-h3">What You Can Contact Me For</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Code2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>Front-end development</strong> (React, Next.js, TypeScript)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Rocket className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>Full-stack web applications</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Gauge className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>Performance, SEO & accessibility</strong> optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Palette className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>UI/UX implementation</strong> & design systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>Technical consulting</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-body"><strong>Freelance missions</strong> or full-time opportunities</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

// Success Message Component
function SuccessMessage({ message, onSendAnother }: { message: string; onSendAnother: () => void }) {
    return (
        <div className="space-y-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg">
                <p className="text-body-lg text-green-800 dark:text-green-200">
                    {message}
                </p>
            </div>
            <button
                onClick={onSendAnother}
                className="w-full md:w-fit px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
                Send Another Message
            </button>
        </div>
    );
}

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [errors, setErrors] = useState<ContactFormErrors>({
        name: "",
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
        const newErrors : ContactFormErrors = {
            name: "",
            email: "",
            message: "",
        };

        // Validate name (2-100 characters)
        if (!name) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
            isValid = false;
        } else if (name.length > 100) {
            newErrors.name = "Name must not exceed 100 characters";
            isValid = false;
        }

        // Validate email (valid format, max 254 characters)
        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!isValidEmail(email)) {
            newErrors.email = "Please enter a valid email";
            isValid = false;
        } else if (email.length > 254) {
            newErrors.email = "Email must not exceed 254 characters";
            isValid = false;
        }

        // Validate message (10-5000 characters)
        if (!message) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            isValid = false;
        } else if (message.length > 5000) {
            newErrors.message = "Message must not exceed 5000 characters";
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

                const data = await response.json();

                if (!response.ok) {
                    // Handle different error status codes
                    if (response.status === 429) {
                        // Rate limit error
                        setStatusMessage(data.message || "Too many requests from this IP, please try again later.");
                    } else if (response.status === 400) {
                        // Validation error - parse field-specific errors
                        if (data.errors && Array.isArray(data.errors)) {
                            const newErrors: ContactFormErrors = {
                                name: "",
                                email: "",
                                message: "",
                            };
                            data.errors.forEach((error: { field: string; message: string }) => {
                                if (error.field in newErrors) {
                                    newErrors[error.field as keyof ContactFormErrors] = error.message;
                                }
                            });
                            setErrors(newErrors);
                            setStatusMessage(""); // Clear status message, errors are shown per field
                        } else {
                            setStatusMessage(data.message || "Validation error. Please check your inputs.");
                        }
                    } else {
                        // Server error (500) or other errors
                        setStatusMessage(data.message || "Failed to send email");
                    }
                    return;
                }

                // Success response (200)
                console.log("Success:", data);
                setStatusMessage(data.message || "Message sent successfully");
                setShowForm(false);
            } catch (error) {
                console.error("Error:", error);
                setStatusMessage("Failed to send message. Please try again.");
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
        setErrors({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="container mx-auto px-4 py-20">
            <h2 className="text-h2 text-center mb-16">Get in Touch</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                {/* Left: Contact Form or Success Message */}
                <div className="order-2 lg:order-1">
                    {!showForm && statusMessage ? (
                        <SuccessMessage
                            message={statusMessage}
                            onSendAnother={handleSendAnotherMessage}
                        />
                    ) : (
                        <form className="space-y-6">
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
                            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${errors.name ? "border-red-500 dark:border-red-400" : "border-zinc-300 dark:border-zinc-700"}`}
                        />
                        <p className="min-h-[20px] text-sm text-red-500 dark:text-red-400">
                            {errors.name}
                        </p>
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
                        {isSubmitting ? "Sending..." : "Submit"}
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
                </div>

                {/* Right: Text Content */}
                <ContactInfo />
            </div>
        </section>
    );
}
