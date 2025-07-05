import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import type { ChartData } from '@/@types/chart-data'

type Props = {
  data: ChartData
}

const PerformanceChart = ({ data }: Props) => (
  <ResponsiveContainer width="100%" height={450}>
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip formatter={(value: number) => `${value} %`} />
      <Line
        type="monotone"
        dataKey="value"
        className="fill-primary"
        dot={false}
        strokeWidth={2}
      />
    </LineChart>
  </ResponsiveContainer>
)

export { PerformanceChart }
