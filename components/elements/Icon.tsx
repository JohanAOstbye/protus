import dynamic from 'next/dynamic'
import React from 'react'
import Loading from './Loading'

export const Icon = ({
  provider,
  name,
}: {
  provider: string
  name: string
}) => {
  return dynamic(
    async () => {
      const icons = await import(`react-icons/${provider}`)
      return icons[name]
    },
    {
      loading: () => <Loading />,
    }
  )
}
