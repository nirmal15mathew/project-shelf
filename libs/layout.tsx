import { ReactNode, useState } from "react"

// Imports to be moved from this file
import AppHeader from "./components/AppHeader"
import Sidebar from "./components/Sidebar"
import MenuImage from "../assets/menu (2).png"
import Image from "next/image"
import { SidebarItem } from "./components/Sidebar"
import { ChartBarIcon, CollectionIcon, CogIcon, MoonIcon, InformationCircleIcon, UserIcon } from "@heroicons/react/outline"


// TODO: To move all the sidebar logic and other components
// from layout to another wrapper component

let sidebarTemplateData: SidebarItem[] = [
    {
        itemType: "item",
        label: "Shelf",
        icon: <CollectionIcon className="w-5 h-5 text-gray-500" />,
        isActive: true,
    },
    {
        itemType: "item",
        label: "Dashboard",
        icon: <ChartBarIcon className="w-5 h-5 text-gray-500" />,
    },
    {
        itemType: "item",
        label: "Settings",
        icon: <CogIcon className="w-5 h-5 text-gray-500" />,
    },
    {
        itemType: 'divider'
    },
    {
        itemType: "item",
        label: "Theme",
        icon: <MoonIcon className="w-5 h-5 text-gray-500" />,
    },
    {
        itemType: "item",
        label: "Account",
        icon: <UserIcon className="w-5 h-5 text-gray-500" />
    },
    {
        itemType: "item",
        label: "About",
        icon: <InformationCircleIcon className="w-5 h-5 text-gray-500" />
    }
]

function AppLogo() {
    return (
        <div className="font-semibold text-gray-700 flex items-center text-lg">
            <Image src={MenuImage} alt="" />
            <span className="mx-1">
                Shelf
            </span>
        </div>
    )
}

export default function Layout({ children }: { children: ReactNode }) {
    const [sidebarState, setSidebar] = useState(false)

    function toggleSidebar() {
        setSidebar(!sidebarState)
    }

    return (
        <div className="bg-gray-300 h-screen w-screen">
            <div className="flex">
            <Sidebar sidebarData={sidebarTemplateData} isOpen={sidebarState}></Sidebar>
            <AppHeader sidebarToggleHandler={() => toggleSidebar()} appLogo={<AppLogo />}></AppHeader>
            </div>
            {children}
        </div>
    )
}