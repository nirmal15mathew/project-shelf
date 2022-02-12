import Image from "next/image"
import Link from "next/link"
interface Project {
    projectTitle: string,
    creationDate?: Date,
    status: "active" | "pending" | "cancelled" | "completed",
    githubUrl?: string,
    websiteUrl?: string,
    coverImgLarge?: string,
    coverImgMedium: string,
    keywords?: string[],
    pid: string
}

export default function ShelfItemGrid({
    projectTitle,
    status,
    coverImgMedium,
    pid
}: Project) {

    // set status style
    let className = "bg-gray-500"
    switch (status) {
        case "active":
            className = "bg-green-500"
            break
        case "cancelled":
            className = "bg-gray-500"
            break
        case "completed":
            className = "bg-blue-500"
            break
        case "pending":
            className = "bg-yellow-300"
    }
    return (
        <Link href={`/in/projects/${pid}`}>
            <div className="p-2 border-b-[1px] border-slate-400 hover:border-slate-600 dark:border-neutral-600 w-full cursor-pointer dark:border-0" tabIndex={0}>
            <div className="flex items-center justify-between">
            <h1 className="text-gray-700 text-md font-normal dark:text-slate-300 flex items-center">
                {projectTitle}
            </h1>
            <span className={className + " rounded-full w-2 h-2"} title={status}>
            </span>
            </div>
        </div>
        </Link>
    )
}