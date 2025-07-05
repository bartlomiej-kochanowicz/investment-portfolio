import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'
import { paths } from './paths'

const Login = lazy(async () => import('./pages/login'))
const Notfound = lazy(async () => import('./pages/not-found'))
const Balance = lazy(async () => import('./pages/balance'))
const Positions = lazy(async () => import('./pages/positions'))
const History = lazy(async () => import('./pages/history'))

const router = createBrowserRouter([
  {
    path: paths.balance,
    element: (
      <ProtectedRoute>
        <Layout>
          <Balance />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: paths.positions,
    element: (
      <ProtectedRoute>
        <Layout>
          <Positions />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: paths.history,
    element: (
      <ProtectedRoute>
        <Layout>
          <History />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
])

export default router
