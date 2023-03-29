import { Course } from 'lib/sanity/sanity.queries'
import { chapterMock } from './chapter'

export const courseMock: Course = {
  _id: 'string2',
  title: 'Java',
  slug: 'Java',
  content: chapterMock.content,
  slugs: [
    { title: 'Chapter 1', slug: 'lol1' },
    { title: 'Chapter 2', slug: 'lol2' },
    { title: 'Chapter 3', slug: 'lol3' },
    { title: 'Chapter 4', slug: 'lol4' },
    { title: 'Chapter 5', slug: 'lol5' },
    { title: 'Chapter 6', slug: 'lol6' },
  ],
}

export const coursesMock: Course[] = [
  courseMock,
  { ...courseMock, _id: 'python', title: 'Python', slug: 'python' },
]
