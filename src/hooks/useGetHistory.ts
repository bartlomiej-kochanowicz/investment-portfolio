import { useState } from 'react'

import type { ChartData } from '@/@types/chart-data'
import type { Portfolio } from '@/@types/portfolio'
import { useGetAssets } from '@/api/useGetAssets'
import { useGetPortfoliosByDate } from '@/api/useGetPortfoliosByDate'
import { useGetPrices } from '@/api/useGetPrices'
import { createDateTable } from '@/utils/create-date-table'

const calculateValueByDate = (
  portfoliosByDate: {
    date: string
    portfolios: Portfolio[]
  }[],
) =>
  portfoliosByDate.map(({ date, portfolios }) => {
    const positions = portfolios.map((portfolio) => portfolio.positions).flat()

    const value = positions.reduce((acc, position) => {
      return acc + position.quantity * position.price
    }, 0)

    return {
      name: date,
      value: Math.round(value * 100) / 100, // Round to avoid floating point issues
    }
  })

const calculatePerformanceByDate = (data: ChartData): ChartData => {
  if (data.length === 0) {
    return []
  }
  if (data.length === 1) {
    return [{ name: data[0].name, value: 0 }]
  }

  const dailyReturns: ChartData = []

  dailyReturns.push({ name: data[0].name, value: 0 })

  for (let i = 1; i < data.length; i++) {
    const todayValue = data[i].value
    const yesterdayValue = data[i - 1].value

    const dailyReturn =
      yesterdayValue !== 0
        ? ((todayValue - yesterdayValue) / yesterdayValue) * 100
        : 0

    dailyReturns.push({
      name: data[i].name,
      value: Math.round(dailyReturn * 100) / 100, // Round to avoid floating point issues
    })
  }

  return dailyReturns
}

enum HistoryType {
  TotalValue = 'total-value',
  Performance = 'performance',
}

type UseGetHistoryProps = { from: Date; to: Date }

const useGetHistory = ({ from, to }: UseGetHistoryProps) => {
  const [historyType, setHistoryType] = useState<HistoryType>(
    HistoryType.TotalValue,
  )

  const {
    data: assets,
    isLoading: assetsIsLoading,
    error: assetsError,
  } = useGetAssets()
  const {
    data: prices,
    isLoading: pricesIsLoading,
    error: pricesError,
  } = useGetPrices()

  const {
    data: portfoliosByDate,
    isLoading: portfoliosByDateIsLoading,
    error: portfoliosByDateError,
  } = useGetPortfoliosByDate(createDateTable(from, to))

  const isLoading =
    assetsIsLoading || pricesIsLoading || portfoliosByDateIsLoading
  const hasError =
    assetsError || pricesError || (portfoliosByDateError && !isLoading)
  const hasData =
    !isLoading && !hasError && assets && prices && portfoliosByDate

  let data: ChartData = []

  if (hasData) {
    data = calculateValueByDate(portfoliosByDate)

    if (historyType === HistoryType.Performance) {
      data = calculatePerformanceByDate(data)
    }
  }

  return {
    data,
    isLoading,
    hasError,
    historyType,
    setHistoryType,
  }
}

export { useGetHistory, HistoryType }
