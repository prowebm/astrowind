import { toHTML } from '@portabletext/to-html'

export function renderPortableText(value: any): string {
  if (!value) return ''
  return toHTML(value, {
    components: {
      types: {
        image: ({ value }) => {
          const url = value?.asset?.url
          const alt = value?.alt || ''
          return url ? `<img src="${url}" alt="${alt}" />` : ''
        },
      },
      marks: {
        link: ({ children, value }) => {
          const href = value?.href || '#'
          return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children}</a>`
        },
      },
    },
  })
}
