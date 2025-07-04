import React from 'react'
import { RouterProvider } from 'react-router'
import { SWRConfig } from 'swr'

import ErrorBoundary from './components/ErrorBoundary'
import router from './router'

const App: React.FC = () => (
  <ErrorBoundary>
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (url: string) =>
          fetch(url).then(async (res) => res.json()),
      }}
    >
      <RouterProvider router={router} />
    </SWRConfig>
  </ErrorBoundary>
)
App.displayName = 'App'
export default App
