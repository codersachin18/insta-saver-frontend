import { useEffect, useRef } from 'react'

export default function BlogAd() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current || ref.current.childNodes.length > 0) return
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'border:none;width:320px;height:50px;max-width:100%;'
    iframe.scrolling = 'no'
    ref.current.appendChild(iframe)
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(`<scr`+`ipt>atOptions={'key':'cc78b30ae0685d12ada2c7e3a78f4172','format':'iframe','height':50,'width':320,'params':{}};</scr`+`ipt><scr`+`ipt src='https://www.highperformanceformat.com/cc78b30ae0685d12ada2c7e3a78f4172/invoke.js'></scr`+`ipt>`)
    doc.close()
  }, [])
  return (
    <div className="blog-ad-wrap">
      <span className="blog-ad-label">Advertisement</span>
      <div ref={ref} />
    </div>
  )
}
