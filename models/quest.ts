export interface Quest {
  username: string
  quest_id: string
  quest_name: string
  quest_started_at: string
  quest_completed_at?: string
  checkpoints: number[]
  gold: number
}
