export interface Game {
  partition_key: string
  sort_key: string
  type: 'Character' | 'Quest' | 'Inventory'
}

export interface CharacterItem extends Game {
  class: string
  guild: string
  total_play_time: number
}

export interface InventoryItem extends Game {
  inventory: Record<string, number>
}

export interface QuestItem extends Game {
  quest_name: string
  quest_started_at: string
  quest_completed_at?: string
  checkpoints: number[]
  gold: number
}
