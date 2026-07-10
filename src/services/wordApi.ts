const WORD_API_URL = 'https://word-api-hmlg.vercel.app/api/validate'

type ValidateWordResponse = {
  exists: boolean
}

export async function validateWordExists(word: string) {
  const url = new URL(WORD_API_URL)
  url.searchParams.set('word', word)

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('No se pudo validar la palabra.')
  }

  const data = (await response.json()) as ValidateWordResponse

  return data.exists
}
