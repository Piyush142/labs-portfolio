import { useEffect } from 'react'

const WRITINGS_URL = 'https://medium.com/the-mock-startup'

export default function Writings() {
  useEffect(() => {
    window.location.replace(WRITINGS_URL)
  }, [])

  return null
}
