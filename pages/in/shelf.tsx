import Head from "next/head";
import { useEffect, useState } from "react";
import ShelfItemGrid from "../../libs/components/ShelfItemGrid";
import ShelfItemList from "../../libs/components/ShelfItemList";
import CircularLoading from "../../libs/components/CircularLoading";
import ShelfHeader from "../../libs/components/shelf-components/ShelfHeader";
import { getProjects } from "../../libs/firebase"
import FloatingActionButton from "../../libs/components/fab/FloatingActionButton";
import { PlusIcon } from "@heroicons/react/outline"


interface Project {
    projectTitle: string,
    creationDate: Date,
    status: "active" | "pending" | "cancelled" | "completed",
    githubUrl?: string,
    websiteUrl?: string,
    coverImgLarge: string,
    coverImgMedium: string,
    keywords: string[],
    pid: string
}

// TODO: add components for handling items

async function getAllProjects() {
    const res = await fetch(`/api/projects`)
    const projectList = await res.json()

    const projects = await getProjects()

    return projects
}

export default function Shelf() {
    const [renderView, setView] = useState<"grid" | "list">("grid")
    const [projectsList, setProjects] = useState<Project[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const res = await getAllProjects()
            setProjects(res)
            console.log(res)
            setLoading(false)
        }
        fetchData()

        return () => {}
    }, [])

    const projects = projectsList.map((item, ind) => (
        <li key={ind}>
            {renderView === "grid" && <ShelfItemGrid projectTitle={item.projectTitle} coverImgMedium={item.coverImgMedium} status={item.status} pid={item.pid}/>}
            {renderView === "list" && <ShelfItemList projectTitle={item.projectTitle} coverImgMedium={item.coverImgMedium} status={item.status} pid={item.pid}/>}
        </li>
    ))

    return (
        <div className="p-2">
            <Head>
                <title>
                    Project Shelf - Shelf
                </title>
            </Head>
            <ShelfHeader setView={setView} renderView={renderView} />

            <section>
                <ul className={renderView === "grid" ? "flex gap-2 flex-wrap" : "flex flex-col"}>
                    {projects}
                </ul>
                {isLoading && <CircularLoading />}
            </section>

            <FloatingActionButton actionHandler={() => {}} defaultClassName="bg-green-600 flex items-center justify-evenly font-semibold gap-1">
                <PlusIcon className="w-6 h-6"></PlusIcon>
                New Project
            </FloatingActionButton>
        </div>
    )
}

export type {
    Project
}