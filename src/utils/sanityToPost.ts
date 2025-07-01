export function sanityToPost(doc) {
  return {
    title: doc.title,
    excerpt: '',
    permalink: `/posts/${doc.slug?.current}`,
    image: doc.mainImage?.asset?.url || '',
    publishedAt: doc.publishedAt,
  }
}
