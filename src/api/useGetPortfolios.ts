import useSWR from 'swr'

import type { Portfolio } from '@/@types/portfolio'

const useGetPortfolios = () => useSWR<Portfolio[]>(`/api/portfolios`)

export { useGetPortfolios }
