import { useState, useEffect } from 'react'

export default function useOutsideClick(
  initialIsVisible: boolean,
  ref: React.RefObject<HTMLElement>
) {
  const [isVisible, setIsVisible] = useState<boolean>(initialIsVisible)

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (ref.current && !ref.current.contains(target)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setIsVisible }
}
