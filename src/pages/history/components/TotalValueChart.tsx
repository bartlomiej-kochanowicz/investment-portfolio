import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import type { ChartData } from '@/@types/chart-data'
import { formatCurrency } from '@/utils/format-currency'

type Props = {
  data: ChartData
}

const TotalValueChart = ({ data }: Props) => (
  <ResponsiveContainer width="100%" height={450}>
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip formatter={(value: number) => formatCurrency(value)} />
      <Bar dataKey="value" className="fill-primary" />
    </BarChart>
  </ResponsiveContainer>
)

export { TotalValueChart }
