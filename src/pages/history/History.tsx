import { LoaderCircle } from 'lucide-react'

import { useGetHistory } from '@/hooks/useGetHistory'

const History = () => {
  const { isLoading, hasError } = useGetHistory()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">History</h1>

      {isLoading && (
        <LoaderCircle className="mx-auto animate-spin size-9 mt-20" />
      )}

      {hasError && (
        <p className="text-center">
          Something went wrong while loading data. Please try again later.
        </p>
      )}
    </div>
  )
}

export default History
