import { ReactNode } from "react";

interface SidebarItem {
    label?: string,
    icon?: ReactNode,
    action?: Function,
    itemType?: "divider" | "item" | "title",
    isActive?: boolean,
}
interface SidebarProps {
    sidebarData: SidebarItem[],
    isOpen: boolean
}

const Divider = () => {
    return (
        <div className="w-full my-2">
            <hr />
        </div>
    )
}

const Item = ({label, icon, action, isActive}:SidebarItem) => {
    return (
        <div onClick={() => {if(action) action()}} className={!isActive ? "flex p-2 text-gray-500 font-semibold items-center hover:bg-slate-200 text-sm transition-colors rounded my-1" : "flex p-2 text-gray-700 font-semibold items-center bg-slate-200 text-sm transition-colors rounded my-1"}>
            <span className="mx-1">{icon}</span> 
            <span>
            {label}
            </span>
        </div>
    )
}

const Title = ({label}: SidebarItem) => {
    return (
        <h3>
            {label}
        </h3>
    )
}

export default function Sidebar({sidebarData, isOpen}: SidebarProps) {

    const dataRender = sidebarData.map((item, index) => (
        <li key={index} className="cursor-pointer min-w-[12rem]">
            {item.itemType === "divider" && <Divider />}
            {item.itemType === "item" && <Item label={item.label} icon={item.icon} action={item.action} />}
            {item.itemType === "title" && <Title label={item.label} />}
        </li>
    ))

    if (isOpen) {
        return (
            <div className="bg-slate-100 py-3 px-2 w-1/5 min-w-max">
            <section>
                <ul>
                {dataRender}
                </ul>
            </section>
            </div>
        )
    }
    else {
        return (<></>)
    }
}

export type {SidebarItem};