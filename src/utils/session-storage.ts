export const setSessionItem = <T>(key: string, value: T): void => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    // Handle storage errors if needed
    console.error('Error setting sessionStorage item', e)
  }
}

export const getSessionItem = <T>(key: string): T | null => {
  try {
    const item = sessionStorage.getItem(key)
    return item ? (JSON.parse(item) as T) : null
  } catch (e) {
    // Handle parsing errors if needed
    console.error('Error getting sessionStorage item', e)
    return null
  }
}

export const removeSessionItem = (key: string): void => {
  try {
    sessionStorage.removeItem(key)
  } catch (e) {
    console.error('Error removing sessionStorage item', e)
  }
}

export const clearSession = (): void => {
  try {
    sessionStorage.clear()
  } catch (e) {
    console.error('Error clearing sessionStorage', e)
  }
}
