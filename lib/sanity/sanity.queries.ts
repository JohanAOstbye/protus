import { groq } from 'next-sanity'
import { TypedObject } from 'sanity'

const chapterFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  content,
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
  title,
  icon,
  content,
  "slug": slug.current,
  "chapters": chapters[]->{"slug": slug.current,title}
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const courseQuery = groq`
*[_type == "course" && slug == $course][0]
{${courseFields}}
`

export const coursesQuery = groq`
*[_type == "course"]
{${courseFields}}
`

export const chapterBySlugAndCourseQuery = groq`
*[_type == "course" && slug == $course  && $slug in chapters[]->slug.current][0]
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

type contentBlock = TypedObject

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
  title?: string
  slug?: string
  content?: content
  chapters?: { title: string; slug: string }[]
}

export type Settings = {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
