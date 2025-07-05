export type Price = {
  id: string // uuid
  asset: string // e.g., "APPL"
  price: number // e.g., 290.32 personaly I would use `29032` here to avoid floating point issues
}
