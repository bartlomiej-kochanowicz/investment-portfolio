import useSWR from 'swr'

const useGetPrices = () => useSWR(`/api/prices`)

export { useGetPrices }
