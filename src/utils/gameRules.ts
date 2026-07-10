export function getWordScore(word: string) {
  return word.length
}

export function wasWordUsed(word: string, usedWords: string[]) {
  return usedWords.includes(word)
}

export function getLastLetter(word: string) {
  return Array.from(word).at(-1) ?? ''
}

export function respectsChain(word: string, previousWord: string | undefined) {
  if (previousWord === undefined) {
    return true
  }

  return word.startsWith(getLastLetter(previousWord))
}
