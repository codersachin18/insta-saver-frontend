import { useEffect, useRef } from 'react'

export default function AdSlot() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || ref.current.childNodes.length > 0) return
    const script = document.createElement('script')
    script.src = 'https://pl29066289.profitablecpmratenetwork.com/c6/63/27/c6632706e25ebdcfb617a5ab0f584793.js'
    script.type = 'text/javascript'
    script.async = true
    ref.current.appendChild(script)
  }, [])

  return <div ref={ref} style={{ display: 'none' }} />
}
