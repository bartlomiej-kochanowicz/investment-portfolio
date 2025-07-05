import useSWR from 'swr'

import type { Price } from '@/@types/price'

const useGetPrices = () => useSWR<Price[]>('/api/prices')

export { useGetPrices }
