import { ReactNode } from "react";

interface PropTypes {
    actionHandler: Function,
    children: ReactNode,
    defaultClassName?: string,
    activeClassName?: string,
    isActive?: boolean
}
export default function FloatingActionButton({
    actionHandler,
    children,
    defaultClassName,
    activeClassName,
    isActive
}: PropTypes) {
    return (
        <button onClick={() => actionHandler()} className={isActive ? `${activeClassName} fixed bottom-3 right-3 shadow p-2 rounded-full` : `${defaultClassName} fixed bottom-3 right-3 shadow p-2 rounded-full`}>
            {children}
        </button>
    )
}