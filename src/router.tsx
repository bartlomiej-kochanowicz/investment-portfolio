import { createBrowserRouter } from 'react-router'

import Login from './pages/login'
import Notfound from './pages/not-found'

const router = createBrowserRouter([
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
