import { z } from 'zod'

const headers = z.record(z.string(), z.array(z.string()).nonempty())

type headersType = z.infer<typeof headers>

export async function apiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: Request,
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
export async function apiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: Request,
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

export async function apiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: Request,
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
export async function apiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: Request,
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

export async function apiValidation<
  T extends z.AnyZodObject,
  Y extends z.AnyZodObject
>(
  request: Request,
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
    const body = input.body.safeParse(await request.json())
    if (!body.success) {
      console.log(body.error)

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
