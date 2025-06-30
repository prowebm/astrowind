import { toHTML } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'

export function renderPortableText(blocks: PortableTextBlock[]) {
  return toHTML(blocks)
}
