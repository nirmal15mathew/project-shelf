import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">("light")

    // function to toggle and save the new
    // theme in local storage
    function toggleTheme() {
        if (theme == "dark") {
            setTheme("light")
            localStorage.setItem('theme', 'light')
        }
        else {
            setTheme("dark")
            localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(() => {
        // when mounted if the localstorage
        // has a theme it sets the theme from local storage to app
        const localTheme = localStorage.getItem('theme') || "light"
        if (localTheme !== null && (localTheme === "dark" || localTheme === "light")) {
            setTheme(localTheme)
        }
        else {
            localStorage.setItem('theme', theme)
        }
    }, [])

    return {
        theme,
        toggleTheme
    }
}