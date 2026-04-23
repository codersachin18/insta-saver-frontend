import { useEffect, useRef } from 'react'

export default function MobileAd2() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current || ref.current.childNodes.length > 0) return
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'border:none;width:468px;height:60px;'
    iframe.scrolling = 'no'
    ref.current.appendChild(iframe)
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(`<scr`+`ipt>atOptions={'key':'54cfcfc1f3f82802d26b42cc9bcb9863','format':'iframe','height':60,'width':468,'params':{}};</scr`+`ipt><scr`+`ipt src='https://www.highperformanceformat.com/54cfcfc1f3f82802d26b42cc9bcb9863/invoke.js'></scr`+`ipt>`)
    doc.close()
  }, [])
  return (
    <div className="ad-mobile-row">
      <span className="ad-row-label">Advertisement</span>
      <div ref={ref} />
    </div>
  )
}
