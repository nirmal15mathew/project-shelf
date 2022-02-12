import { ReactNode } from "react";

interface PropTypes {
    cardTitle: string,
    children: ReactNode
}
export default function DashboardCard({
    cardTitle,
    children
}:
    PropTypes
) {
    return (
        <div className="bg-slate-100 shadow rounded p-2 w-fit dark:bg-neutral-600">
            <header className="flex items-center mb-2">
                <h1 className="font-semibold text-gray-700 dark:text-slate-300">
                    {cardTitle}
                </h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}