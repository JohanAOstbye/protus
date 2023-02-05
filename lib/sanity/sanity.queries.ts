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

const chapterFieldsWithCourse = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "course": *[_type == "course" && references(^._id)][0].name 
`

const courseFields = groq`
  _id,
  name,
  page->{${chapterFields}},
  "slugs": chapters[]->slug.current
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const courseQuery = groq`
*[_type == "course" && name == $course][0]
{${courseFields}}
`

export const coursesQuery = groq`
*[_type == "course"]
{${courseFields}}
`

export const chapterBySlugAndCourseQuery = groq`
*[_type == "course" && name == $course  && $slug in chapters[]->slug.current][0]
{
  chapters[]->
}
{
  chapters[slug.current == $slug]
}.chapters[0]
  {${chapterFields}}

`
export const CoursePageQuery = groq`
*[_type == "course" && name == $course ][0]
{
  "page": page->{${chapterFields}}
}
`

export type Author = {
  name?: string
  picture?: any
}

type descriptionBlock = {
  title: string
  content: string[]
}

type contentBlock = string | descriptionBlock

type content = contentBlock[]

export type Chapter = {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: content
  course?: string
}

export type Course = {
  _id: string
  name?: string
  page: Chapter
  slugs?: string[]
}

export type Settings = {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
