import { useState } from 'react'

import type { ChartData } from '@/@types/chart-data'
import { useGetAssets } from '@/api/useGetAssets'
import { useGetPortfolios } from '@/api/useGetPortfolios'
import { useGetPrices } from '@/api/useGetPrices'

enum SummaryType {
  ByAsset = 'by-asset',
  ByClass = 'by-class',
}

const useGetSummaryByType = () => {
  const [summaryType, setSummaryType] = useState<SummaryType>(
    SummaryType.ByAsset,
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
    data: portfolios,
    isLoading: portfoliosIsLoading,
    error: portfoliosError,
  } = useGetPortfolios()

  const isLoading = assetsIsLoading || pricesIsLoading || portfoliosIsLoading
  const hasError = (assetsError || pricesError || portfoliosError) && !isLoading
  const hasData = !isLoading && !hasError && assets && prices && portfolios

  let data: ChartData = []

  if (hasData) {
    const positions = portfolios.map((portfolio) => portfolio.positions).flat()

    const positionsWithAssets = positions.map((position) => {
      const asset = assets.find((asset) => asset.id === position.asset)
      return {
        ...position,
        asset: asset ? asset : null,
      }
    })

    if (summaryType === SummaryType.ByAsset) {
      const assetMap: Record<string, number> = {}

      positionsWithAssets.forEach((position) => {
        if (position.asset && position.asset.name) {
          const value = position.quantity * position.price

          if (assetMap[position.asset.name]) {
            assetMap[position.asset.name] += value
          } else {
            assetMap[position.asset.name] = value
          }
        }
      })

      data = Object.entries(assetMap).map(([name, value]) => ({
        name,
        // Usually not good practice to use floating point numbers for currency, but here we round to avoid issues
        // I sugest to use integers for currency in production code
        // e.g. 100.00 $ -> 10000 cents
        // and then divide by 100 when displaying
        // or use a library like `dinero.js` or `currency.js`
        value: Math.round(value * 100) / 100,
      }))
    }

    if (summaryType === SummaryType.ByClass) {
      const classMap: Record<string, number> = {}

      positionsWithAssets.forEach((position) => {
        if (position.asset && position.asset.type) {
          const value = position.quantity * position.price

          if (classMap[position.asset.type]) {
            classMap[position.asset.type] += value
          } else {
            classMap[position.asset.type] = value
          }
        }
      })

      data = Object.entries(classMap).map(([name, value]) => ({
        name,
        value: Math.round(value * 100) / 100, // Round to avoid floating point issues
      }))
    }
  }

  return {
    isLoading,
    hasError,
    data,
    summaryType,
    setSummaryType,
  }
}

export { useGetSummaryByType, SummaryType }
