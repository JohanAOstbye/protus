import { NextRestFramework } from 'next-rest-framework'
import { getServerAuthSession } from './auth'

export const { defineCatchAllHandler, defineEndpoints } = NextRestFramework({
  swaggerUiPath: '/api/xapi/docs',
  openApiJsonPath: '/api/xapi',
  openApiYamlPath: '/api/xapi',
  openApiSpec: {
    openapi: '3.0.0',
    info: {
      title: 'Protus xAPI',
      summary: 'test xAPI for protus',
      version: '0.0.1',
    },
  },
  middleware: async ({ req, res }) => {
    const session = await getServerAuthSession({ req, res })
    return { session }
  },
})
