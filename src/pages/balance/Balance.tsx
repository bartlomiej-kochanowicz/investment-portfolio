import { LoaderCircle } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import { ToggleButtons } from '@/components/ToggleButtons'
import { SummaryType, useGetSummaryByType } from '@/hooks/useGetSummaryByType'

const Balance = () => {
  const { data, isLoading, hasError, summaryType, setSummaryType } =
    useGetSummaryByType()

  const COLORS = [
    '#4F8A8B',
    '#FBD46D',
    '#F76B8A',
    '#A8D8EA',
    '#374785',
    '#24305E',
    '#70A1D7',
    '#B8B5FF',
  ]

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Balance</h1>
      <ToggleButtons
        options={[
          { label: 'By Asset', value: SummaryType.ByAsset },
          { label: 'By Class', value: SummaryType.ByClass },
        ]}
        value={summaryType}
        setValue={setSummaryType}
      />

      {isLoading && (
        // 207px = (450px (chart height) - 36px (spinner height)) / 2
        // to center the spinner vertically in the chart area
        <LoaderCircle className="mx-auto animate-spin size-9 mt-[207px]" />
      )}

      {hasError && (
        <p className="text-center">
          Something went wrong while loading data. Please try again later.
        </p>
      )}

      {!isLoading && !hasError && (
        <ResponsiveContainer width="100%" height={450}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={120}
              dataKey="value"
              label={(entry) => `${entry.name}: ${entry.value} $`}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default Balance
