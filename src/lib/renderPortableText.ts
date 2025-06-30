import { toHTML } from '@portabletext/to-html'

export function renderPortableText(value: any) {
  return toHTML(value, {
    components: {
      types: {
        image: ({ value }) => {
          const url = value?.asset?._ref || ''
          return `<img src="${url}" alt="${value.alt || ''}" />`
        },
      },
    },
  })
}
