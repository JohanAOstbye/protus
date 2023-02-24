import { NextRestFramework } from 'next-rest-framework'

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
})
