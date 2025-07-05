import { http, HttpResponse } from 'msw'

import type { Portfolio } from '@/@types/portfolio'
import type { Price } from '@/@types/price'

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
        id: 'b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
        name: 'IWM',
        type: 'etf',
      },
    ]

    await sleep(2000)

    return HttpResponse.json(data)
  }),
  http.get('http://localhost:3000/api/prices', async ({ request }) => {
    const url = new URL(request.url)

    const name = url.searchParams.get('name') // Asset filter
    // const asOf = url.searchParams.get('asOf')

    const data: Record<string, Price[]> = {
      AAPL: [
        {
          id: 'p1a1e1b0-1a2b-4c3d-8e9f-1a2b3c4d5e6f',
          asset: 'AAPL',
          price: 150.25,
        },
        {
          id: 'p2b2f2c1-2b3c-5d4e-9f0a-2b3c4d5e6f7a',
          asset: 'AAPL',
          price: 151.0,
        },
        {
          id: 'p3c3g3d2-3c4d-6e5f-0a1b-3c4d5e6f7a8b',
          asset: 'AAPL',
          price: 149.75,
        },
        {
          id: 'p4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
          asset: 'AAPL',
          price: 152.0,
        },
      ],
      AMZN: [
        {
          id: 'p13f4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
          asset: 'AMZN',
          price: 3400.0,
        },
        {
          id: 'p14f4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
          asset: 'AMZN',
          price: 3398.5,
        },
        {
          id: 'p15f4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
          asset: 'AMZN',
          price: 3402.1,
        },
        {
          id: 'p16f4d4h4e3-4d5e-7f6a-1b2c-4d5e6f7a8b9c',
          asset: 'AMZN',
          price: 3399.9,
        },
      ],
      TSLA: [
        {
          id: 'p17a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
          asset: 'TSLA',
          price: 700.0,
        },
        {
          id: 'p18a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
          asset: 'TSLA',
          price: 702.5,
        },
        {
          id: 'p19a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
          asset: 'TSLA',
          price: 698.8,
        },
        {
          id: 'p20a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
          asset: 'TSLA',
          price: 701.2,
        },
      ],
      META: [
        {
          id: 'p21b6f6j6g5-6f7a-9b8c-3d4e-6f7a8b9c0d1e',
          asset: 'META',
          price: 350.0,
        },
        {
          id: 'p22b6f6j6g5-6f7a-9b8c-3d4e-6f7a8b9c0d1e',
          asset: 'META',
          price: 351.5,
        },
        {
          id: 'p23b6f6j6g5-6f7a-9b8c-3d4e-6f7a8b9c0d1e',
          asset: 'META',
          price: 349.8,
        },
        {
          id: 'p24b6f6j6g5-6f7a-9b8c-3d4e-6f7a8b9c0d1e',
          asset: 'META',
          price: 352.1,
        },
      ],
      VOO: [
        {
          id: 'p25c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
          asset: 'VOO',
          price: 400.0,
        },
        {
          id: 'p26c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
          asset: 'VOO',
          price: 401.2,
        },
        {
          id: 'p27c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
          asset: 'VOO',
          price: 399.5,
        },
        {
          id: 'p28c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
          asset: 'VOO',
          price: 402.0,
        },
      ],
      IEFA: [
        {
          id: 'p29d8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
          asset: 'IEFA',
          price: 65.0,
        },
        {
          id: 'p30d8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
          asset: 'IEFA',
          price: 65.3,
        },
        {
          id: 'p31d8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
          asset: 'IEFA',
          price: 64.8,
        },
        {
          id: 'p32d8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
          asset: 'IEFA',
          price: 65.7,
        },
      ],
      GLD: [
        {
          id: 'p33e9c9m9j8-9c0d-2e1f-6a7b-9c0d1e2f3a4b',
          asset: 'GLD',
          price: 180.0,
        },
        {
          id: 'p34e9c9m9j8-9c0d-2e1f-6a7b-9c0d1e2f3a4b',
          asset: 'GLD',
          price: 181.2,
        },
        {
          id: 'p35e9c9m9j8-9c0d-2e1f-6a7b-9c0d1e2f3a4b',
          asset: 'GLD',
          price: 179.5,
        },
        {
          id: 'p36e9c9m9j8-9c0d-2e1f-6a7b-9c0d1e2f3a4b',
          asset: 'GLD',
          price: 182.0,
        },
      ],
      IWM: [
        {
          id: 'p45b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
          asset: 'IWM',
          price: 220.0,
        },
        {
          id: 'p46b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
          asset: 'IWM',
          price: 221.2,
        },
        {
          id: 'p47b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
          asset: 'IWM',
          price: 219.5,
        },
        {
          id: 'p48b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
          asset: 'IWM',
          price: 222.0,
        },
      ],
    }

    await sleep(2000)

    const response = data[name || ''] || []

    return HttpResponse.json(response)
  }),
  http.get('http://localhost:3000/api/portfolios', async ({ request }) => {
    const url = new URL(request.url)
    const asOfFromRequest = url.searchParams.getAll('asOf')

    const asOf = asOfFromRequest[0]
      ? new Date(asOfFromRequest[0]).toISOString()
      : new Date().toISOString()

    const randomInt64 = () =>
      Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)

    // Generates a random price between min and max (inclusive, 2 decimals)
    const randomPrice = (min: number, max: number): number =>
      Math.round((Math.random() * (max - min) + min) * 100) / 100

    const data: Portfolio[] = [
      {
        id: '63b4fe67-fdc6-4422-a29c-03caced8d70a',
        asOf: new Date(asOf).toISOString(),
        positions: [
          {
            id: randomInt64(),
            asset: 'c1a1e1b0-1a2b-4c3d-8e9f-1a2b3c4d5e6f',
            quantity: 10,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(140, 160),
          },
          {
            id: randomInt64(),
            asset: 'c1a1e1b0-1a2b-4c3d-8e9f-1a2b3c4d5e6f',
            quantity: 14,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(30, 50),
          },
          {
            id: randomInt64(),
            asset: 'd8b8l8i7-8b9c-1d0e-5f6a-8b9c0d1e2f3a',
            quantity: 3,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(80, 100),
          },
        ],
      },
      {
        id: 'e4140ae6-cddf-4924-b063-fe1dd85466c0',
        asOf: new Date(asOf).toISOString(),
        positions: [
          {
            id: randomInt64(),
            asset: 'c7a7k7h6-7a8b-0c9d-4e5f-7a8b9c0d1e2f',
            quantity: 20,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(10, 30),
          },
          {
            id: randomInt64(),
            asset: 'b2f2p2m1-2f3a-5b4c-9d0e-2f3a4b5c6d7e',
            quantity: 6,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(20, 25),
          },
          {
            id: randomInt64(),
            asset: 'a5e5i5f4-5e6f-8a7b-2c3d-5e6f7a8b9c0d',
            quantity: 30,
            asOf: new Date(asOf).toISOString(),
            price: randomPrice(40, 50),
          },
        ],
      },
    ]

    await sleep(2000)

    return HttpResponse.json(data)
  }),
]
