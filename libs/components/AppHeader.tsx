import { ReactChild, ReactChildren } from "react";
import { MenuAlt1Icon } from "@heroicons/react/outline";
interface HeaderProps {
    sidebarToggleHandler: Function,
    appLogo: ReactChild,
    children?: ReactChildren
}
const AppHeader = ({sidebarToggleHandler, appLogo, children}: HeaderProps) => {
    return (
        <header className="w-full p-3 bg-slate-100 flex items-center min-w-min h-min">
            <div className="flex items-center hover:bg-slate-300 rounded-full p-2 transition-colors" onClick={() => sidebarToggleHandler()}>
                <button type="button" className="text-gray-700" title="Menu">
                    <MenuAlt1Icon className="w-6 h-6"/>
                </button>
            </div>

            <figure className="flex items-center mx-2">
                {appLogo}
            </figure>

            <section>
                {children}
            </section>
        </header>
    )
}

export default AppHeader;