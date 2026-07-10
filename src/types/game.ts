export type GameStatus = 'idle' | 'playing' | 'finished'

export type FeedbackType = 'info' | 'error' | 'success'

export type Feedback = {
  type: FeedbackType
  message: string
}
