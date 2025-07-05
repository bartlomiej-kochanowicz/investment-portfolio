import { useGetAssets } from '@/api/useGetAssets'
import { useGetPortfolios } from '@/api/useGetPortfolios'
import { useGetPrices } from '@/api/useGetPrices'

const Balance = () => {
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

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {hasError && (
        <p>Something went wrong while loading data. Please try again later.</p>
      )}

      {!isLoading && !hasError && (
        <pre>
          <code>{JSON.stringify({ assets, prices, portfolios }, null, 2)}</code>
        </pre>
      )}
      <h1>Balance</h1>
    </div>
  )
}

export default Balance
