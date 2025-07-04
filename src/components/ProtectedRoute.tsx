import { Navigate } from 'react-router'

import { auth } from '@/auth'
import { paths } from '@/paths'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { getSession } = auth()

  const session = getSession()

  if (!session) {
    return <Navigate to={paths.login} />
  }

  return <>{children}</>
}

export { ProtectedRoute }
