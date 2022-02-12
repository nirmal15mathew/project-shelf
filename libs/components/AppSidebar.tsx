import { ChartBarIcon, CogIcon, CollectionIcon, InformationCircleIcon, MoonIcon, PlusCircleIcon, SunIcon, UserAddIcon, UserIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useAuth } from "../firebase"
import Sidebar, { SidebarItem } from "./Sidebar"
import { useEffect } from "react"

export default function AppSidebar({toggleTheme, currentTheme, sidebarState}: {
    toggleTheme: Function,
    currentTheme: "dark" | "light",
    sidebarState: boolean
}) {
    const router = useRouter()
    const auth = useAuth()
    let currentUser = auth.currentUser;

    useEffect(() => {
        currentUser = auth.currentUser
    }, [auth])
    let sidebarTemplateData: SidebarItem[] = [
        {
            itemType: "item",
            label: "Shelf",
            icon: <CollectionIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/in/shelf'),
            isActive: router.asPath === "/in/shelf"
        },
        {
            itemType: "item",
            label: "Dashboard",
            icon: <ChartBarIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/in/dashboard'),
            isActive: router.asPath === "/in/dashboard"
        },
        {
            itemType: "item",
            label: "Settings",
            icon: <CogIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/in/settings'),
            isActive: router.asPath === "/in/settings"
        },
        {
            itemType: 'divider'
        },
        {
            itemType: "item",
            label: "Theme",
            icon: currentTheme === "dark" ? <SunIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" /> : <MoonIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => toggleTheme()
        },
        {
            itemType: "item",
            label: "Account",
            icon: <UserIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/in/account'),
            isActive: router.asPath === "/in/account"
        },
        {
            itemType: "item",
            label: "About",
            icon: <InformationCircleIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/about'),
            isActive: router.asPath === "/about"
        }
    ]

    const noLoggedData: SidebarItem[] = [
        {
            label: "Sign Up",
            itemType: "item",
            icon: <UserAddIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/login')
        },
        {
            itemType: "item",
            label: "About",
            icon: <InformationCircleIcon className="w-5 h-5 text-gray-500 dark:text-slate-400" />,
            action: () => router.push('/about'),
            isActive: router.asPath === "/about"
        }
    ]

    if (currentUser !== null) {
        return (
            <Sidebar sidebarData={sidebarTemplateData} isOpen={sidebarState}></Sidebar>
        )
    }
    else {
        return (
            <Sidebar sidebarData={noLoggedData} isOpen={sidebarState} />
        )
    }
}