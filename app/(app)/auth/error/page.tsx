import React from 'react'
import { ErrorPage } from 'components/pages/auth/ErrorPage'

const page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  let error = searchParams.error || 'unknown error'
  if (Array.isArray(error)) {
    error = error[0]
  }
  return <ErrorPage error={error} />
}

export default page
