import { LoaderCircle } from 'lucide-react'

import { Table, TBody, TD, TH, THead, TR } from '@/components/Table'
import { ToggleButtons } from '@/components/ToggleButtons'
import { SummaryType, useGetSummaryByType } from '@/hooks/useGetSummaryByType'
import { formatCurrency } from '@/utils/format-currency'

const Positions = () => {
  const { data, isLoading, hasError, summaryType, setSummaryType } =
    useGetSummaryByType()

  const getTH = (type: SummaryType) => {
    switch (type) {
      case SummaryType.ByAsset:
        return 'Asset'
      case SummaryType.ByClass:
        return 'Class'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Positions</h1>
      <ToggleButtons
        options={[
          { label: 'By Asset', value: SummaryType.ByAsset },
          { label: 'By Class', value: SummaryType.ByClass },
        ]}
        value={summaryType}
        setValue={setSummaryType}
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
        <Table>
          <THead>
            <TH scope="col">{getTH(summaryType)}</TH>
            <TH scope="col">Value</TH>
          </THead>
          <TBody>
            {data.map((item) => (
              <TR key={item.name}>
                <TH scope="row">{item.name}</TH>
                <TD>{formatCurrency(item.value)}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      )}
    </div>
  )
}

export default Positions
