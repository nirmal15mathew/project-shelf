export default function ShelfNewProjectDialog({isOpen}: {isOpen: boolean}) {
    if (isOpen) return (
        <div id="dialog-wrapper-background" className="fixed w-screen h-screen bg-gray-800/50">
            <div className="rounded p-2 bg-slate-100 shadow-lg">
            <header>
                <h1 className="text-lg font-semibold text-gray-700">
                    New Project
                </h1>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
        </div>
    )
}