import { createContext, ReactNode } from "react"

interface SettingsType {

}

const settings = createContext<SettingsType>({})
export default function SettingContextWrapper({children}: {children: ReactNode}) {
    return (
        <settings.Provider value={{}}>
            {children}
        </settings.Provider>
    )
}