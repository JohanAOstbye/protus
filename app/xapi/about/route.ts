import { apiValidation } from 'lib/server/rest'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  if (request.headers.get('Content-Type') !== 'application/json') {
    return NextResponse.json(
      { message: 'Content-Type must be application/json' },
      { status: 400 }
    )
  }
}

export async function Get(request: Request) {
  const validator = apiValidation(request.clone(), undefined, {
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
