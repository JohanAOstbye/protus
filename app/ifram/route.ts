import { apiValidation } from 'lib/server/rest'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(request: Request) {
  const validator = apiValidation(request.clone(), {
    query: z.object({ url: z.string().url() }),
  })
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const response = await fetch(validator.data.query.url)
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 400 })
  }
  console.log(response)
  return NextResponse.json({ ok: true })
}
