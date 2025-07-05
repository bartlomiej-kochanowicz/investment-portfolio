import useSWR from 'swr'

import type { Asset } from '@/@types/asset'

const useGetAssets = () => useSWR<Asset[]>('/api/assets')

export { useGetAssets }
