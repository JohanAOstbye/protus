import React from 'react'

export const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error}</p>
    </div>
  )
}
