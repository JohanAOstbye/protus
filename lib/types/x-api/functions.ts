import { authorityType } from './authority'
import { statementType } from './statement'

export async function sendStatement(
  statement: statementType,
  authority: authorityType
) {
  statement.authority = authority

  const body = JSON.stringify({ statements: [statement] })

  const response = await fetch('/xAPI/statements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
  if (!response.ok) {
    throw new Error('Error sending statement')
  }

  return response.json()
}

export async function sendStatements(
  statements: statementType[],
  authority: authorityType
) {
  statements.map((statement) => {
    return { ...statement, authority: authority }
  })

  const response = await fetch('/xAPI/statements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ statements: statements }),
  })
  if (!response.ok) {
    throw new Error('Error sending statement')
  }

  return response.json()
}

export function getDeviceCategory(width: number, height: number) {
  const viewport = Math.max(width, height)
  if (viewport < 512) {
    return 'mobile'
  } else if (viewport < 1200) {
    return 'tablet'
  } else {
    return 'desktop'
  }
}
