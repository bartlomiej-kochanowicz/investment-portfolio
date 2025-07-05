import useSWR from 'swr'

import type { Portfolio } from '@/@types/portfolio'

type Props = {
  asOf?: Date
}

const useGetPortfolios = (props?: Props) => {
  const { asOf } = props || {}

  const params = new URLSearchParams()

  if (asOf) {
    params.append('asOf', asOf.toISOString())
  }

  const paramsString = params.toString()

  return useSWR<Portfolio[]>(
    `/api/portfolios${paramsString ? `?${paramsString}` : ''}`,
  )
}

export { useGetPortfolios }
