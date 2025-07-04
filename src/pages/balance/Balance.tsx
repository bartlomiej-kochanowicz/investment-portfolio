import { useGetAssets } from '@/api/useGetAssets'

const Balance = () => {
  const { data /* , error, isLoading */ } = useGetAssets()

  console.log(data)

  return (
    <div>
      <h1>Balance</h1>
    </div>
  )
}

export default Balance
