import useSWR from 'swr'

const useGetPortfolios = () => useSWR(`/api/portfolios`)

export { useGetPortfolios }
