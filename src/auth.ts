import { redirect } from 'react-router'

import {
  setSessionItem,
  clearSession,
  getSessionItem,
} from './utils/session-storage'

const AUTH_KEY = 'user'

const auth = () => {
  const getSession = () => {
    const user = getSessionItem<{ email: string }>(AUTH_KEY)

    if (!(user && typeof user === 'object' && 'email' in user && user.email)) {
      return null
    }

    return user
  }

  const login = (email: string) => {
    setSessionItem(AUTH_KEY, { email })
  }

  const logout = () => {
    clearSession()

    redirect('/login')
  }

  return {
    getSession,
    login,
    logout,
  }
}

export { auth }
