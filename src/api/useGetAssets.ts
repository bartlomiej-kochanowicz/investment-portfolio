import useSWR from 'swr'

const useGetAssets = () => useSWR(`/api/assets`)

export { useGetAssets }
