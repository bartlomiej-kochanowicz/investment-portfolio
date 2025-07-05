import useSWR from 'swr'

import type { Portfolio } from '@/@types/portfolio'

const getPortfolios = async ({
  asOf,
}: {
  asOf: string
}): Promise<Portfolio[]> =>
  fetch(`/api/portfolios?asOf=${encodeURIComponent(asOf)}`).then(async (res) =>
    res.json(),
  )

const useGetPortfoliosByDate = (dates: string[]) =>
  useSWR(['portfolios', dates], async () => {
    const results = await Promise.all(
      dates.map(async (date) => ({
        date,
        portfolios: await getPortfolios({ asOf: date }),
      })),
    )

    return results
  })

export { useGetPortfoliosByDate }
