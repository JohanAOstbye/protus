export { basicAuthMiddleware }
import { prisma } from 'lib/server/db'
import { NextRequest } from 'next/server'

async function basicAuthMiddleware(req: NextRequest) {
  // make authenticate path public
  if (req.url === '/api/users/authenticate') {
    return
  }

  // check for basic auth header
  const authHeader = req.headers.get('authorization')
  if (
    !authHeader ||
    (authHeader !== null && authHeader.indexOf('Basic ') === -1)
  ) {
    throw { status: 401, message: 'Missing Authorization Header' }
  }

  // verify auth credentials
  const base64Credentials = authHeader.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii')
  const [email, password] = credentials.split(':')
  const user = await prisma.user.findUnique({ where: { email } })

  if (!user || (user.password && user.password !== password)) {
    throw { status: 401, message: 'Invalid Authentication Credentials' }
  }
}
