import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const [mount, setMount] = useState(false);
    const roles = ["light", "dark", "system"];

    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) {
        return <div>Loading...</div>;
    }

    return (
        <div role="radiogroup" aria-label="Choose display theme">
            {roles.map((role) => (
                <button
                    role="radio"
                    aria-checked={theme === role}
                    onClick={() => changeTheme(role)}
                    key={role}
                >
                    {role}
                </button>
            ))}
        </div>
    );
}
