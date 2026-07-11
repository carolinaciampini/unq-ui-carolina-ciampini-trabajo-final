import type { Feedback } from '../../types/game'

type FeedbackMessageProps = {
  feedback: Feedback | null
}

const feedbackStyles: Record<Feedback['type'], string> = {
  info: 'border-[#dfe3ec] bg-[#f8fafc] text-muted',
  error: 'border-red-200 bg-red-50 text-red-700',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
}

export function FeedbackMessage({ feedback }: FeedbackMessageProps) {
  if (feedback === null) {
    return null
  }

  return (
    <p
      className={`mt-3 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm ${feedbackStyles[feedback.type]}`}
      role="status"
    >
      {feedback.message}
    </p>
  )
}
