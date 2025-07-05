import { LoaderCircle } from 'lucide-react'

import { ToggleButtons } from '@/components/ToggleButtons'
import { HistoryType, useGetHistory } from '@/hooks/useGetHistory'

import { PerformanceChart } from './components/PerformanceChart'
import { TotalValueChart } from './components/TotalValueChart'

const History = () => {
  const to = new Date()
  const from = new Date(to)
  from.setDate(from.getDate() - 14)

  const { isLoading, hasError, data, historyType, setHistoryType } =
    useGetHistory({
      from,
      to,
    })

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">History</h1>
      <ToggleButtons
        options={[
          { label: 'Total Value', value: HistoryType.TotalValue },
          { label: 'Performance', value: HistoryType.Performance },
        ]}
        value={historyType}
        setValue={setHistoryType}
      />

      {isLoading && (
        <LoaderCircle className="mx-auto animate-spin size-9 mt-20" />
      )}

      {hasError && (
        <p className="text-center">
          Something went wrong while loading data. Please try again later.
        </p>
      )}

      {!isLoading && !hasError && (
        <>
          {historyType === HistoryType.TotalValue ? (
            <TotalValueChart data={data} />
          ) : null}
          {historyType === HistoryType.Performance ? (
            <PerformanceChart data={data} />
          ) : null}
        </>
      )}
    </div>
  )
}

export default History
