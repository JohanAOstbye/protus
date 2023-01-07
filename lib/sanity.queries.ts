import { groq } from 'next-sanity'

const chapterFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "chapter"] | order(date desc, _updatedAt desc) {
  ${chapterFields}
}`

export const chapterAndMoreStoriesQuery = groq`
{
  "chapter": *[_type == "chapter" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${chapterFields}
  },
  "moreChapters": *[_type == "chapter" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${chapterFields}
  }
}`

export const chapterSlugsQuery = groq`
*[_type == "chapter" && defined(slug.current)][].slug.current
`

export const chapterBySlugQuery = groq`
*[_type == "chapter" && slug.current == $slug][0] {
  ${chapterFields}
}
`

export interface Author {
  name?: string
  picture?: any
}

export interface Chapter {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
