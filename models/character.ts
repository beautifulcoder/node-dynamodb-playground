export interface Character {
  username: string
  class: string
  guild: string
  inventory: Record<string, number>
  total_play_time: number
}
