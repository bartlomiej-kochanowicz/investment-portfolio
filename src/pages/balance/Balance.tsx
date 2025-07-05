import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import { ToggleChartView } from './components/ToggleChartView'
import { ChartView, useGetBalance } from './hooks/useGetBalance'

const Balance = () => {
  const [chartView, setChartView] = useState<ChartView>(ChartView.ByAsset)

  const { data, isLoading, hasError } = useGetBalance(chartView)

  const COLORS = [
    '#4F8A8B', // teal
    '#FBD46D', // soft yellow
    '#F76B8A', // soft red
    '#A8D8EA', // light blue
    '#374785', // deep blue
    '#24305E', // navy
    '#70A1D7', // muted blue
    '#B8B5FF', // lavender
  ]

  return (
    <>
      {isLoading && <p>Loading...</p>}

      {hasError && (
        <p>Something went wrong while loading data. Please try again later.</p>
      )}

      {!isLoading && !hasError && (
        <div>
          <ToggleChartView chartView={chartView} setChartView={setChartView} />
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
        </div>
      )}
    </>
  )
}

export default Balance
