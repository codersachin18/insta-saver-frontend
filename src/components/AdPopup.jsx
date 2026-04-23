import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

export default function AdPopup({ onClose, loading }) {
  const ref = useRef(null)

  // auto-close when fetch completes
  useEffect(() => {
    if (!loading) onClose()
  }, [loading])

  useEffect(() => {
    if (!ref.current || ref.current.childNodes.length > 0) return
    const conf = document.createElement('script')
    conf.type = 'text/javascript'
    conf.text = `atOptions = {'key':'7eeba7e6f72f3cb5d68e2ff21e150194','format':'iframe','height':250,'width':300,'params':{}};`
    const invoke = document.createElement('script')
    invoke.type = 'text/javascript'
    invoke.src = 'https://www.highperformanceformat.com/7eeba7e6f72f3cb5d68e2ff21e150194/invoke.js'
    invoke.async = true
    ref.current.appendChild(conf)
    ref.current.appendChild(invoke)
  }, [])

  return (
    <div className="ad-popup-overlay">
      <div className="ad-popup">
        <div className="ad-popup-header">
          <span className="ad-popup-label">Advertisement</span>
          <button className="ad-popup-close" onClick={onClose}><X size={16} /></button>
        </div>
        <div className="ad-popup-body">
          <div ref={ref} />
        </div>
        <div className="ad-popup-footer">
          Downloading your video...
          <span className="ad-popup-dots"><span/><span/><span/></span>
        </div>
      </div>
    </div>
  )
}
