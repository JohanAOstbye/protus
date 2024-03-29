import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
  readToken,
  useCdn,
} from 'lib/sanity/sanity.api'
import { chapterBySlugAndCourseQuery } from 'lib/sanity/sanity.queries'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { PageConfig } from 'next/types'
import { createClient } from 'next-sanity'
import { getNextSecret } from 'plugins/productionUrl/utils'

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: 'nodejs' }

//TODO: update logic for redirecting to the correct page

function redirectToPreview(
  res: NextApiResponse<string | void>,
  previewData: { token?: string },
  Location: '/' | `/${string}/${string}`
): void {
  // Enable Preview Mode by setting the cookies
  res.setPreviewData(previewData)
  // Redirect to a preview capable route
  res.writeHead(307, { Location })
  res.end()
}

const _client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: readToken,
})

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  const previewData: { token?: string } = {}
  // If you want to require preview mode sessions to be started from the Studio, set the SANITY_REQUIRE_PREVIEW_SECRET
  // environment variable to 'true'. The benefit of doing this that unauthorized users attempting to brute force into your
  // preview mode won't make it past the secret check, and only legitimate users are able to bypass the statically generated pages and load up
  // the serverless-powered preview mode.
  if (
    process.env.SANITY_REQUIRE_PREVIEW_SECRET === 'true' &&
    !req.query.secret
  ) {
    return res.status(401).send('Invalid secret')
  }

  // If a secret is present in the URL, verify it and if valid we upgrade to token based preview mode, which works in Safari and Incognito mode
  if (req.query.secret) {
    const token = process.env.SANITY_API_READ_TOKEN
    if (!token) {
      throw new Error(
        'A secret is provided but there is no `SANITY_API_READ_TOKEN` environment variable setup.'
      )
    }
    const client = _client.withConfig({ useCdn: false, token })
    const secret = await getNextSecret(client, previewSecretId)
    if (req.query.secret !== secret) {
      return res.status(401).send('Invalid secret')
    }
    previewData.token = token
  }

  // If no slug is provided open preview mode on the frontpage
  if (!req.query.slug) {
    return redirectToPreview(res, previewData, '/')
  }

  // Check if the chapter with the given `slug` exists
  const client = _client.withConfig({
    // Fallback to using the WRITE token until https://www.sanity.io/docs/vercel-integration starts shipping a READ token.
    // As this client only exists on the server and the token is never shared with the browser, we don't risk escalating permissions to untrustworthy users
    token:
      process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
  })
  const chapter = await client.fetch(chapterBySlugAndCourseQuery, {
    slug: req.query.slug,
    course: 'livet',
  })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!chapter) {
    return res.status(401).send('Invalid slug')
  }

  // Redirect to the path from the fetched chapter
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  redirectToPreview(res, previewData, `/chapter/${chapter.slug}`)
}
