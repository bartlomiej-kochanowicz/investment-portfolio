import ErrorBoundary from '../ErrorBoundary'

import { Sidebar } from './Sidebar'

type Props = {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <ErrorBoundary>{children}</ErrorBoundary>
      </main>
    </>
  )
}

export { Layout }
