import { z } from 'zod'

const headers = z.record(z.string(), z.array(z.string()).nonempty())

type headersType = z.infer<typeof headers>

export function apiValidation<T extends z.ZodRawShape, Y extends z.ZodRawShape>(
  request: Request,
  input: undefined,
  headers?: headersType
):
  | {
      success: true
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
export function apiValidation<T extends z.ZodRawShape, Y extends z.ZodRawShape>(
  request: Request,
  input: { body: z.ZodObject<Y> },
  headers?: headersType
):
  | {
      success: true
      data: {
        body: z.infer<z.ZodObject<Y>>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }

export function apiValidation<T extends z.ZodRawShape, Y extends z.ZodRawShape>(
  request: Request,
  input: { query: z.ZodObject<T> },
  headers?: headersType
):
  | {
      success: true
      data: {
        query: z.infer<z.ZodObject<T>>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
export function apiValidation<T extends z.ZodRawShape, Y extends z.ZodRawShape>(
  request: Request,
  input: { query: z.ZodObject<T>; body: z.ZodObject<Y> },
  headers?: headersType
):
  | {
      success: true
      data: {
        query: z.infer<z.ZodObject<T>>
        body: z.infer<z.ZodObject<Y>>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }

export function apiValidation<T extends z.ZodRawShape, Y extends z.ZodRawShape>(
  request: Request,
  input?: { query?: z.ZodObject<T>; body?: z.ZodObject<Y> },
  headers?: headersType
):
  | {
      success: true
      data: {
        query?: z.infer<z.ZodObject<T>>
        body?: z.infer<z.ZodObject<Y>>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    } {
  const data: {
    query?: z.infer<z.ZodObject<T>>
    body?: z.infer<z.ZodObject<Y>>
  } = {}
  if (headers) {
    request.headers.forEach((value, key) => {
      if (headers[key]) {
        if (!headers[key].includes(value)) {
          return {
            success: false,
            error: {
              json: { message: 'header is invalid' },
              options: { status: 400 },
            },
          }
        }
      }
    })
  }

  if (input && input.query) {
    let url = new URL(request.url)
    const searchParams = Object.fromEntries(new URLSearchParams(url.search))
    const query = input.query.safeParse(searchParams)
    if (!query.success) {
      return {
        success: false,
        error: {
          json: { message: 'query is invalid' },
          options: { status: 400 },
        },
      }
    }
    data.query = query.data
  }
  if (input && input.body) {
    const body = input.body.safeParse(request.body)
    if (!body.success) {
      return {
        success: false,
        error: {
          json: { message: 'body is invalid', error: body.error },
          options: { status: 400 },
        },
      }
    }
    data.body = body.data
  }
  return { success: true, data }
}
