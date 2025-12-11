import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Ghivalla Soumar - Front-End Developer Portfolio",
        template: "%s | Ghivalla Soumar"
    },
    description: "Front-end developer specializing in JavaScript, TypeScript, and modern web technologies. I build high-performance, responsive interfaces with React, Next.js, and clean UI/UX. Explore my projects, code quality, and expertise in crafting fast, scalable web applications.",
    keywords: ["React", "Next.js", "TypeScript", "Front-End Developer", "Web Development", "JavaScript", "UI/UX", "Responsive Design"],
    authors: [{ name: "Ghivalla Soumar" }],
    creator: "Ghivalla Soumar",
    metadataBase: new URL("https://ghivalla.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ghivalla.com",
        siteName: "Ghivalla Soumar Portfolio",
        title: "Ghivalla Soumar - Front-End Developer Portfolio",
        description: "Front-end developer specializing in JavaScript, TypeScript, and modern web technologies. Building high-performance, responsive interfaces with React and Next.js.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ghivalla Soumar - Front-End Developer"
            }
        ]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    },
    manifest: "/manifest.json"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider>
                    <Navigation />
                    <main className="pt-[72px]">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
