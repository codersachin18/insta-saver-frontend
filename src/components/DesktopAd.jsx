import { useEffect, useRef } from 'react'

export default function DesktopAd() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current || ref.current.childNodes.length > 0) return
    const iframe = document.createElement('iframe')
    iframe.style.cssText = 'border:none;width:728px;height:90px;'
    iframe.scrolling = 'no'
    ref.current.appendChild(iframe)
    const doc = iframe.contentDocument || iframe.contentWindow.document
    doc.open()
    doc.write(`<scr`+`ipt>atOptions={'key':'873680814abd172354bec9f3ffc4d295','format':'iframe','height':90,'width':728,'params':{}};</scr`+`ipt><scr`+`ipt src='https://www.highperformanceformat.com/873680814abd172354bec9f3ffc4d295/invoke.js'></scr`+`ipt>`)
    doc.close()
  }, [])
  return (
    <div className="ad-desktop-row">
      <span className="ad-row-label">Advertisement</span>
      <div ref={ref} />
    </div>
  )
}
