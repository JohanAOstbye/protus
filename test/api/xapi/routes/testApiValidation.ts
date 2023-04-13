import { z } from 'zod'

const headers = z.record(z.string(), z.array(z.string()).nonempty())

type headersType = z.infer<typeof headers>

export async function testApiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: {
    query?: URLSearchParams
    headers?: Headers
    body?: any
  },
  input: undefined,
  headers?: headersType
): Promise<
  | { success: true }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
>
export async function testApiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: {
    query?: URLSearchParams
    headers?: Headers
    body?: any
  },
  input: { body: Y },
  headers?: headersType
): Promise<
  | {
      success: true
      data: {
        body: z.infer<Y>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
>

export async function testApiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: {
    query?: URLSearchParams
    headers?: Headers
    body?: any
  },
  input: { query: T },
  headers?: headersType
): Promise<
  | {
      success: true
      data: {
        query: z.infer<T>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
>
export async function testApiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: {
    query?: URLSearchParams
    headers?: Headers
    body?: any
  },
  input: { query: T; body: Y },
  headers?: headersType
): Promise<
  | {
      success: true
      data: {
        query: z.infer<T>
        body: z.infer<Y>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
>

export async function testApiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: {
    query?: URLSearchParams
    headers?: Headers
    body?: any
  },
  input?: { query?: T; body?: Y },
  headers?: headersType
): Promise<
  | {
      success: true
      data: {
        query?: z.infer<T>
        body?: z.infer<Y>
      }
    }
  | {
      success: false
      error: {
        json: { message: string; error?: z.ZodError<any> }
        options: { status: number }
      }
    }
> {
  const data: {
    query?: z.infer<T>
    body?: z.infer<Y>
  } = {}
  if (headers && request.headers) {
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

  if (input && input.query && request.query) {
    let rawSearchParams = request.query
    const searchParams = Object.fromEntries(rawSearchParams)
    rawSearchParams.forEach((value, key) => {
      searchParams[key] = JSON.parse(value)
    })
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
    let json = request.body

    const body = input.body.safeParse(json)
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
