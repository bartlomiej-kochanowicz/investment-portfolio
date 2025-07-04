import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { ProtectedRoute } from './components/ProtectedRoute'

const Login = lazy(async () => import('./pages/login'))
const Notfound = lazy(async () => import('./pages/not-found'))
const Dashboard = lazy(async () => import('./pages/dashboard'))

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
])

export default router
