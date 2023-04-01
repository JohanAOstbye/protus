import { apiValidation } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
import { z } from 'zod'
import { prisma } from 'lib/server/db'
import { activityObject, objectFromPrisma } from 'lib/types/x-api/object'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const validator = apiValidation(
    request.clone(),
    {
      query: z.object({
        activityId: IRI,
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const { query } = validator.data

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  try {
    const prismaActivity = await prisma.object.findUnique({
      where: {
        id: query.activityId,
      },
    })
    if (!prismaActivity || prismaActivity.objectType !== 'Activity') {
      return NextResponse.json(undefined, { status: 404, headers })
    }

    let object = objectFromPrisma(prismaActivity)

    const result = activityObject.safeParse(object)
    if (result.success) {
      return NextResponse.json(result.data, { status: 200, headers })
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}
