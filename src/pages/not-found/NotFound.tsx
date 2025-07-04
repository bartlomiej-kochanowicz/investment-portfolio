import { memo } from 'react'

const Notfound = memo(() => (
  <div className="w-screen h-screen flex items-center justify-center">
    <h1 className="text-2xl font-bold">404: Page Not Found</h1>
  </div>
))

Notfound.displayName = 'Notfound'

export default Notfound
