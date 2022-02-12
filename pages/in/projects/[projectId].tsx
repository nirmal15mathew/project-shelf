import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/outline"

export default function ProjectView() {
    const router = useRouter()

    const {projectId} = router.query
    console.log(projectId)

    return (
        <div className="p-2">
            <header className="p-2 text-gray-700 text-sm">
                <Link href={"/in/shelf"}><div className="flex items-center"><a>Shelf</a> <ChevronRightIcon className="w-4 h-4 mx-1"></ChevronRightIcon> {projectId}</div>
                </Link>
            </header>
            <main>
            {projectId}
            </main>
        </div>
    )
}