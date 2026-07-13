import type { LeaderboardEntry } from '../types/game'

const LEADERBOARD_KEY = 'palabras-encadenadas-leaderboard'
const MAX_LEADERBOARD_ENTRIES = 10

export function getLeaderboard() {
  const storedLeaderboard = window.localStorage.getItem(LEADERBOARD_KEY)

  if (storedLeaderboard === null) {
    return []
  }

  try {
    return JSON.parse(storedLeaderboard) as LeaderboardEntry[]
  } catch {
    return []
  }
}

export function saveLeaderboardEntry(entry: LeaderboardEntry) {
  const leaderboardWithoutCurrentEntry = getLeaderboard().filter(
    (storedEntry) => storedEntry.id !== entry.id,
  )
  const updatedLeaderboard = [...leaderboardWithoutCurrentEntry, entry]
    .sort((firstEntry, secondEntry) => {
      if (secondEntry.score !== firstEntry.score) {
        return secondEntry.score - firstEntry.score
      }

      return secondEntry.wordsCount - firstEntry.wordsCount
    })
    .slice(0, MAX_LEADERBOARD_ENTRIES)

  window.localStorage.setItem(
    LEADERBOARD_KEY,
    JSON.stringify(updatedLeaderboard),
  )

  return updatedLeaderboard
}
