import { apiValidation } from 'lib/server/rest'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const validator = await apiValidation(request.clone(), undefined, {
    'content-type': ['application/json'],
  })
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  return NextResponse.json(
    {
      version: ['1.0.0'],
      extensions: undefined,
    },
    { status: 200, headers }
  )
}
