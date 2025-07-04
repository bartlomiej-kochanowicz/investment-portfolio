export type Position = {
  id: number // int64
  asset: string // uuid
  quantity: number // int32
  asOf: string // date-time (ISO string)
  price: number // int32
}
