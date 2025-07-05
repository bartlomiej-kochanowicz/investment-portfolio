import type { Dispatch, SetStateAction } from 'react'

import Button from '@/components/Button'
import { SummaryType } from '@/hooks/useGetSummaryByType'

type Props = {
  summaryType: SummaryType
  setSummaryType: Dispatch<SetStateAction<SummaryType>>
}

const ToggleSummaryType = ({ summaryType, setSummaryType }: Props) => {
  const handleByAssetClick = () => {
    setSummaryType(SummaryType.ByAsset)
  }

  const handleByClassClick = () => {
    setSummaryType(SummaryType.ByClass)
  }

  return (
    <div className="space-x-2">
      <Button
        onClick={handleByAssetClick}
        disabled={summaryType === SummaryType.ByAsset}
      >
        By Asset
      </Button>
      <Button
        onClick={handleByClassClick}
        disabled={summaryType === SummaryType.ByClass}
      >
        By Class
      </Button>
    </div>
  )
}

export { ToggleSummaryType }
