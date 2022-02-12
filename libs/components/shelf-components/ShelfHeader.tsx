import PageHeader from '../PageHeader'
import {
  ViewGridIcon,
  ViewListIcon,
  FilterIcon,
} from '@heroicons/react/outline'

interface PropTypes {
    renderView: "grid" | "list",
    setView: Function
}

export default function ShelfHeader({
    renderView,
    setView
}: PropTypes) {
  return (
    <div className="flex justify-between">
      <PageHeader>Shelf</PageHeader>

      <section className="flex">
        <ul className="flex gap-1">
          <li className="flex items-center">
            <button
              className={
                renderView === 'grid'
                  ? 'flex h-6 w-6 items-center text-gray-700 dark:text-slate-500'
                  : 'flex h-6 w-6 items-center text-gray-500 dark:text-slate-300'
              }
              title="grid view"
              type="button"
              onClick={() => setView('grid')}
            >
              <ViewGridIcon></ViewGridIcon>
            </button>
          </li>
          <li className="flex items-center">
            <button
              className={
                renderView === 'list'
                  ? 'flex h-6 w-6 items-center text-gray-700 dark:text-slate-500'
                  : 'flex h-6 w-6 items-center  text-gray-500 dark:text-slate-300'
              }
              title="list view"
              type="button"
              onClick={() => setView('list')}
            >
              <ViewListIcon></ViewListIcon>
            </button>
          </li>
        </ul>

        <div className="ml-3 flex items-center">
          <button
            className="flex h-6 w-6 items-center text-gray-500 hover:text-gray-700 dark:hover:text-slate-300"
            title="Filter"
            type="button"
          >
            <FilterIcon></FilterIcon>
          </button>
        </div>
      </section>
    </div>
  )
}
