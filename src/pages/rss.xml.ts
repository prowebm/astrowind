import rss from '@astrojs/rss'
import { sanity } from '~/lib/sanity'

export async function GET() {
  const posts = await sanity.fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...10] {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt
  }`)

  return rss({
    title: 'Blog RSS Feed',
    description: 'Últimos artigos do blog',
    site: 'https://teusite.com', // substitui pelo teu domínio real
    items: posts.map(post => ({
      title: post.title || 'Sem título',
      description: typeof post.excerpt === 'string'
        ? post.excerpt
        : Array.isArray(post.excerpt)
          ? post.excerpt.map(block =>
              Array.isArray(block.children)
                ? block.children.map(child => child.text).join('')
                : ''
            ).join('\n')
          : '',
      pubDate: post.publishedAt,
      link: `/posts/${post.slug}`,
    })),
  })
}
