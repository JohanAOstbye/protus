import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { dataset, projectId } from 'lib/sanity/sanity.api'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max')
