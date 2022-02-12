import { ReactNode } from "react";

export default function PageHeader({children}: {children: ReactNode}) {
    return (
        <header className="">
            <h1 className="font-semibold text-gray-700 text-lg dark:text-gray-300">
                {children}
            </h1>
        </header>
    )
}