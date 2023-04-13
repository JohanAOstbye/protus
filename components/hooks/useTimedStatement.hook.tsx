import { statementType } from 'lib/types/x-api/statement'
import React, { useEffect } from 'react'
import { Duration, serialize } from 'tinyduration'

export const useTimedStatement = (sendFunction: (duration: string) => void) => {
  const [time, setTime] = React.useState<number>(Date.now())

  useEffect(() => {
    return () => {
      const now = Date.now()
      const diff = now - time
      if (diff > 1000) {
        const duration: Duration = {
          seconds: Math.floor((diff / 1000) % 60),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          hours: Math.floor((diff / 1000 / 60 / 60) % 24),
        }
        sendFunction(serialize(duration))
      }
    }
  }, [])
}
