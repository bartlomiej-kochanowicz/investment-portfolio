import type { ChartData } from '@/@types/chart-data'
import { useGetAssets } from '@/api/useGetAssets'
import { useGetPortfolios } from '@/api/useGetPortfolios'
import { useGetPrices } from '@/api/useGetPrices'

const useGetHistory = () => {
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

  const data: ChartData = []

  if (hasData) {
    const positions = portfolios.map((portfolio) => portfolio.positions).flat()

    const positionsWithAssets = positions.map((position) => {
      const asset = assets.find((asset) => asset.id === position.asset)
      return {
        ...position,
        asset: asset ? asset : null,
      }
    })

    console.log('positionsWithAssets', positionsWithAssets)
  }

  return {
    data,
    isLoading,
    hasError,
  }
}

export { useGetHistory }
