export function Navigation() {
    const links = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <header className="border-b border-zinc-200 dark:border-zinc-800">
            <nav aria-label="Main navigation" className="flex flex-row justify-between items-center container mx-auto py-4 px-4">
                <div>
                    <a href="/" className="text-body-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500 rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-semibold">
                        Ghivalla
                    </a>
                </div>
                <ul className="flex flex-row gap-6 list-none">
                    {
                        links.map((link) => (<li key={link.name}>
                            <a className="text-body px-3 py-2 rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-500" href={link.href}>
                                {link.name}
                            </a>
                        </li>))
                    }
                </ul>
            </nav>
        </header>
    );
}
