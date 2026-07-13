export type GameStatus = 'idle' | 'playing' | 'finished'

export type FeedbackType = 'info' | 'error' | 'success'

export type Feedback = {
  type: FeedbackType
  message: string
}

export type LeaderboardEntry = {
  id: string
  score: number
  wordsCount: number
  date: string
}
