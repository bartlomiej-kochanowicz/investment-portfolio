import { ChartPie, Menu, Table, History, LogOut } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

import { auth } from '@/auth'
import { paths } from '@/paths'
import { cn } from '@/utils/cn'

import Button from '../Button'

const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = auth()

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev)
  }

  const handleLogout = () => {
    logout()

    navigate(paths.login)
  }

  const items = [
    {
      name: 'Balance',
      icon: ChartPie,
      to: paths.balance,
    },
    {
      name: 'Positions',
      icon: Table,
      to: paths.positions,
    },
    {
      name: 'History',
      icon: History,
      to: paths.history,
    },
  ]

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
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 flex flex-col justify-between">
          <ul className="space-y-2 font-medium">
            {items.map(({ name, icon: Icon, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center p-2 text-black rounded-lg hover:bg-gray-200 group ${isActive ? 'bg-gray-200 text-primary' : ''}`
                  }
                  tabIndex={isOpen ? 0 : -1}
                  aria-current="page"
                >
                  <Icon aria-hidden="true" focusable="false" />
                  <span className="ms-3">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <Button className="gap-2" onClick={handleLogout}>
            <LogOut aria-hidden="true" focusable="false" />
            Logout
          </Button>
        </div>
      </aside>

      {isOpen && (
        <div
          role="presentation"
          aria-label="Sidebar backdrop"
          tabIndex={0}
          className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30 sm:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export { Sidebar }
