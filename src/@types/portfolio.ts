import type { Position } from './position'

export type Portfolio = {
  id: string // uuid
  asOf: string // date-time
  positions: Position[]
}
