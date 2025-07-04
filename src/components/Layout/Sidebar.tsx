import { ChartPie, Menu } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils/cn'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <button
        aria-controls="layout-sidebar"
        aria-expanded={isOpen}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={toggleSidebar}
        id="sidebar-toggle"
      >
        <span className="sr-only">
          {isOpen ? 'Close sidebar' : 'Open sidebar'}
        </span>
        <Menu aria-hidden="true" focusable="false" />
      </button>

      <aside
        id="layout-sidebar"
        className={cn(
          'fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Sidebar"
        tabIndex={-1}
        role="complementary"
        aria-modal="true"
        aria-hidden={!isOpen && 'true'}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                tabIndex={isOpen ? 0 : -1}
                aria-current="page"
              >
                <ChartPie aria-hidden="true" focusable="false" />
                <span className="ms-3">Balance</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {isOpen && (
        <div
          role="presentation"
          aria-label="Sidebar backdrop"
          tabIndex={0}
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 sm:hidden"
          onClick={toggleSidebar}
          onKeyDown={(e) => {
            if (e.key === 'Escape') toggleSidebar()
          }}
        />
      )}
    </>
  )
}

export { Sidebar }
