import { ReactNode, useEffect, useState } from "react"

// Imports to be moved from this file
import AppHeader from "./components/AppHeader"
import MenuImage from "../assets/menu (2).png"
import Image from "next/image"
import AppSidebar from "./components/AppSidebar"
import { useRouter } from "next/router"

// TODO: To move all the sidebar logic and other components
// from layout to another wrapper component


function AppLogo() {
    return (
        <div className="font-semibold text-gray-700 flex items-center text-lg dark:text-slate-300">
            <Image src={MenuImage} alt="" />
            <span className="mx-1">
                Projects
            </span>
        </div>
    )
}

export default function Layout({ children, currentTheme, toggleTheme }: { children: ReactNode, currentTheme: "light" | "dark", toggleTheme: Function }) {

    // routing based on auth state
    const router = useRouter()

    // sidebar logic
    const [sidebarState, setSidebar] = useState(false)
    function toggleSidebar() {
        setSidebar(!sidebarState)
    }

    return (
        <div className={currentTheme}>
            <div className="bg-gray-300 h-screen w-screen dark:bg-neutral-800">
                <div className="flex">
                    <AppSidebar currentTheme={currentTheme} toggleTheme={toggleTheme} sidebarState={sidebarState} />
                    <div className="w-full">
                        <AppHeader sidebarToggleHandler={() => toggleSidebar()} appLogo={<AppLogo />}></AppHeader>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}