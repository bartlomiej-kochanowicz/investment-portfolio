import { http, HttpResponse } from 'msw'

import type { Asset } from '../src/@types/asset'

const sleep = async (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const handlers = [
  http.get('http://localhost:3000/api/assets', async () => {
    const data: Asset[] = [
      {
        id: 'c1a1e1b0-1a2b-4c3d-8e9f-1a2b3c4d5e6f',
        name: 'AAPL',
        type: 'stock',
      },
      {
        id: 'd2b2f2c1-2b3c-5d4e-9f0a-2b3c4d5e6f7a',
        name: 'MSFT',
        type: 'stock',
      },
      {
        id: 'e3c3g3d2-3c4d-6e5f-0a1b-3c4d5e6f7a8b',
        name: 'GOOGL',
        type: 'stock',
      },
      {
        id: 'f4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
        name: 'AMZN',
        type: 'stock',
      },
      {
        id: 'a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
        name: 'TSLA',
        type: 'stock',
      },
      {
        id: 'b6f6j6g5-6f7a-9b8c-3d4e-6f7a8b9c0d1e',
        name: 'META',
        type: 'stock',
      },
      {
        id: 'c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
        name: 'VOO',
        type: 'etf',
      },
      {
        id: 'd8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
        name: 'IEFA',
        type: 'etf',
      },
      {
        id: 'e9c9m9j8-9c0d-2e1f-6a7b-9c0d1e2f3a4b',
        name: 'GLD',
        type: 'etf',
      },
      {
        id: 'f0d0n0k9-0d1e-3f2a-7b8c-0d1e2f3a4b5c',
        name: 'QQQ',
        type: 'etf',
      },
      {
        id: 'a1e1o1l0-1e2f-4a3b-8c9d-1e2f3a4b5c6d',
        name: 'SCHB',
        type: 'etf',
      },
      {
        id: 'b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
        name: 'IWM',
        type: 'etf',
      },
    ]

    await sleep(2000)

    return HttpResponse.json(data)
  }),
]
