import { Navigate } from 'react-router'

import { auth } from '@/auth'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { getSession } = auth()

  const session = getSession()

  console.log('@@', session)

  if (!session) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}

export { ProtectedRoute }
