import { Course } from 'lib/sanity/sanity.queries'
import { chapterMock } from './chapter'

export const courseMock: Course = {
  _id: 'string2',
  title: 'Java',
  slug: 'Java',
  content: chapterMock.content,
  chapters: [
    {
      slug: '/',
      title: 'Time Time Operator with an extremely long title hehe',
    },
    { slug: '/', title: 'Variables' },
    { slug: '/', title: 'Time Operator' },
    { slug: '/', title: 'Lists' },
    { slug: '/', title: 'If and Else' },
    { slug: '/', title: 'For loops' },
    { slug: '/', title: 'Observebale and Observer' },
    { slug: '/', title: 'streams & stuff' },
    { slug: '/', title: 'Time Operator' },
    { slug: '/', title: 'Variables' },
    { slug: '/', title: 'Time Operator' },
    { slug: '/', title: 'Lists' },
    { slug: '/', title: 'If and Else' },
    { slug: '/', title: 'For loops' },
    { slug: '/', title: 'Observebale and Observer' },
    { slug: '/', title: 'streams & stuff' },
  ],
}

export const coursesMock: Course[] = [
  courseMock,
  { ...courseMock, _id: 'python', title: 'Python', slug: 'python' },
]
