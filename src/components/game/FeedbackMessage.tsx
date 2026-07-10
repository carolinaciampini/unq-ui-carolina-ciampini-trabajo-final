import type { Feedback } from '../../types/game'

type FeedbackMessageProps = {
  feedback: Feedback
}

const feedbackStyles: Record<Feedback['type'], string> = {
  info: 'border-[#dfe3ec] bg-[#f8fafc] text-muted',
  error: 'border-red-200 bg-red-50 text-red-700',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
}

export function FeedbackMessage({ feedback }: FeedbackMessageProps) {
  return (
    <p
      className={`mt-3 rounded-xl border px-4 py-3 text-sm font-semibold ${feedbackStyles[feedback.type]}`}
      role="status"
    >
      {feedback.message}
    </p>
  )
}
