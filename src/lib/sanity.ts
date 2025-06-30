import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'k80l0tts', // substitui pelo teu verdadeiro projectId
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false, // garante que vais buscar conteúdo atualizado
})
