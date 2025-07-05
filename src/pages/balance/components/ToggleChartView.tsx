import type { Dispatch, SetStateAction } from 'react'

import Button from '@/components/Button'

import { ChartView } from '../hooks/useGetBalance'

type Props = {
  chartView: ChartView
  setChartView: Dispatch<SetStateAction<ChartView>>
}

const ToggleChartView = ({ chartView, setChartView }: Props) => {
  const handleByAssetClick = () => {
    setChartView(ChartView.ByAsset)
  }

  const handleByClassClick = () => {
    setChartView(ChartView.ByClass)
  }

  return (
    <div className="space-x-2">
      <Button
        onClick={handleByAssetClick}
        disabled={chartView === ChartView.ByAsset}
      >
        By Asset
      </Button>
      <Button
        onClick={handleByClassClick}
        disabled={chartView === ChartView.ByClass}
      >
        By Class
      </Button>
    </div>
  )
}

export { ToggleChartView }
