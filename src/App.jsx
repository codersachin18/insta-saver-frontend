import { useState, useEffect, useRef } from 'react'
import {
  Download, Camera, Sun, Moon, Menu, X,
  CheckCircle, AlertCircle, Play,
  Globe, Palette, RefreshCw, Shield, FileText, AlertTriangle, ChevronRight,
  Home, BookOpen, Newspaper, ChevronDown, Link, MousePointerClick, ArrowDownToLine
} from 'lucide-react'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfUse from './pages/TermsOfUse.jsx'
import Disclaimer from './pages/Disclaimer.jsx'
import About from './pages/About.jsx'
import Blogs, { BlogPost } from './pages/Blogs.jsx'
import AdSlot from './components/AdSlot.jsx'
import MobileAd1 from './components/MobileAd1.jsx'
import MobileAd2 from './components/MobileAd2.jsx'
import DesktopAd from './components/DesktopAd.jsx'
import AdPopup from './components/AdPopup.jsx'
import { loadPopunder } from './components/triggerPopunder.js'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
]

const T = {
  en: {
    heading: 'Download Instagram Reels & Stories Free',
    tagline: 'Paste your Reel or Story link below',
    placeholder: 'Paste Reel / Story URL here...',
    getVideo: 'Get Video',
    fetching: 'Fetching...',
    downloading: 'Downloading...',
    downloadVideo: 'Download Video',
    downloadImage: 'Download Image',
    downloadAnother: 'Download Another',
    fetchingTitle: 'Fetching your video',
    fetchingSub: 'Hang tight, grabbing video info...',
    invalidUrl: 'Please enter a valid Instagram URL',
    theme: 'Dark Mode',
    language: 'Language',
    toastReel: '🎬 Reel found!',
    toastStory: '📖 Story found!',
    toastSub: 'Ready to download',
    badge: 'Free & Fast',
    hint: 'Supports Reels, Stories, Posts',
  },
  hi: {
    heading: 'Instagram Reels और Stories मुफ्त डाउनलोड करें',
    tagline: 'नीचे अपना Reel या Story लिंक पेस्ट करें',
    placeholder: 'Reel / Story URL यहाँ पेस्ट करें...',
    getVideo: 'वीडियो लाएं',
    fetching: 'लोड हो रहा है...',
    downloading: 'डाउनलोड हो रहा है...',
    downloadVideo: 'वीडियो डाउनलोड करें',
    downloadImage: 'इमेज डाउनलोड करें',
    downloadAnother: 'दूसरा डाउनलोड करें',
    fetchingTitle: 'वीडियो लाया जा रहा है',
    fetchingSub: 'थोड़ा रुकें...',
    invalidUrl: 'कृपया एक वैध Instagram URL दर्ज करें',
    theme: 'डार्क मोड',
    language: 'भाषा',
    toastReel: '🎬 Reel मिली!',
    toastStory: '📖 Story मिली!',
    toastSub: 'डाउनलोड के लिए तैयार',
    badge: 'मुफ्त और तेज़',
    hint: 'Reels, Stories, Posts सपोर्ट करता है',
  },
  fr: {
    heading: 'Télécharger des Reels et Stories Instagram',
    tagline: 'Collez votre lien Reel ou Story ci-dessous',
    placeholder: 'Collez l\'URL Reel / Story ici...',
    getVideo: 'Obtenir la vidéo',
    fetching: 'Chargement...',
    downloading: 'Téléchargement...',
    downloadVideo: 'Télécharger la vidéo',
    downloadImage: 'Télécharger l\'image',
    downloadAnother: 'Télécharger une autre',
    fetchingTitle: 'Récupération de votre vidéo',
    fetchingSub: 'Patientez...',
    invalidUrl: 'Veuillez entrer une URL Instagram valide',
    theme: 'Mode sombre',
    language: 'Langue',
    toastReel: '🎬 Reel trouvé!',
    toastStory: '📖 Story trouvée!',
    toastSub: 'Prêt à télécharger',
    badge: 'Gratuit et rapide',
    hint: 'Supporte Reels, Stories, Posts',
  },
  pt: {
    heading: 'Baixar Reels e Stories do Instagram Grátis',
    tagline: 'Cole seu link de Reel ou Story abaixo',
    placeholder: 'Cole a URL do Reel / Story aqui...',
    getVideo: 'Obter vídeo',
    fetching: 'Carregando...',
    downloading: 'Baixando...',
    downloadVideo: 'Baixar vídeo',
    downloadImage: 'Baixar imagem',
    downloadAnother: 'Baixar outro',
    fetchingTitle: 'Buscando seu vídeo',
    fetchingSub: 'Aguarde...',
    invalidUrl: 'Por favor insira uma URL válida do Instagram',
    theme: 'Modo escuro',
    language: 'Idioma',
    toastReel: '🎬 Reel encontrado!',
    toastStory: '📖 Story encontrada!',
    toastSub: 'Pronto para baixar',
    badge: 'Grátis e rápido',
    hint: 'Suporta Reels, Stories, Posts',
  },
}

function isValidUrl(url) {
  return /https?:\/\/(www\.)?instagram\.com\/(reel|reels|p|tv|stories)\/[^/]+/.test(url)
}

const API_BASE = import.meta.env.PROD
  ? 'https://reel-downloader-api-juun.onrender.com'
  : ''

const API_KEY = import.meta.env.VITE_API_KEY || ''

function apiFetch(path, options = {}) {
  return fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': API_KEY,
      ...(options.headers || {}),
    },
  })
}

function formatDuration(s) {
  if (!s) return ''
  const m = Math.floor(s / 60), sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}

function HowToUse() {
  const steps = [
    {
      icon: <Link size={22} color="#fff" />,
      num: '01',
      title: 'Copy the Link',
      desc: 'Open Instagram, tap the three-dot menu on any Reel, Story or Post, and select "Copy Link".',
    },
    {
      icon: <MousePointerClick size={22} color="#fff" />,
      num: '02',
      title: 'Paste & Fetch',
      desc: 'Paste the link into the box above and hit the download arrow button to fetch your media.',
    },
    {
      icon: <ArrowDownToLine size={22} color="#fff" />,
      num: '03',
      title: 'Download & Done',
      desc: 'Click the Download button — your file saves instantly. No watermark, full quality.',
    },
  ]

  return (
    <section className="how-section">
      <div className="how-label">Simple Steps</div>
      <h2 className="how-heading">How to Download Instagram Reels</h2>
      <p className="how-sub">Save any Instagram video or photo in 3 easy steps — takes less than 10 seconds.</p>
      <div className="steps-wrap">
        {steps.map((s, i) => (
          <>
            <div key={s.num} className="step-item" style={{'--delay': `${i * 0.15}s`}}>
              <div className="step-left">
                <div className="step-icon-wrap">
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-num">{s.num}</div>
                </div>
              </div>
              <div className="step-content">
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div key={`line-${i}`} className="step-line" style={{'--delay': `${i * 0.15 + 0.1}s`}}>
                <div className="step-line-fill" />
              </div>
            )}
          </>
        ))}
      </div>
    </section>
  )
}

function SeoSection() {
  return (
    <section className="seo-section">
      <div className="seo-inner">
      <div className="seo-sub">Instagram Saver</div>
      <h2 className="seo-heading">Download Instagram Reels, Stories & Posts Free</h2>
      <div className="seo-body">
        <p>
          <strong>Insta Saver</strong> is the most trusted <strong>Instagram Reel downloader</strong> available online today.
          Whether you're looking to save a trending Reel, download an Instagram Story before it expires,
          or grab a high-quality photo from any public post, our <strong>Instagram video downloader</strong> makes it effortless.
          No app download needed, no account required — just paste the link and download.
        </p>
        <p>
          Looking for a reliable <strong>Instagram post downloader</strong>? Insta Saver supports all Instagram content types —
          Reels, Stories, carousel posts, single photos, and IGTV videos. Our <strong>Instagram Story saver</strong> lets you
          download Stories in full quality before they disappear after 24 hours. It's the perfect tool for content creators,
          marketers, and everyday users who want to save content they love.
        </p>
        <p>
          Unlike other tools, our <strong>Instagram Reels downloader without watermark</strong> delivers clean, original-quality
          files directly to your device. No annoying watermarks, no blurry exports, no file size limits.
          Whether you need an <strong>Instagram video saver</strong> for personal use or a <strong>free Instagram downloader</strong>
          for your workflow, Insta Saver is built to handle it all — fast, safe, and completely free.
        </p>
        <p>
          Our tool works as a <strong>download Instagram video online</strong> solution that's compatible with all browsers
          including Chrome, Safari, Firefox, and Edge. It works on iPhone, Android, Windows, and Mac without any
          software installation. Simply use it as a <strong>save Instagram Reel online</strong> tool right from your browser.
          We also support <strong>Instagram photo downloader</strong> functionality for carousel posts with multiple images.
        </p>
        <p>
          Insta Saver is the go-to <strong>Instagram content downloader</strong> trusted by millions of users worldwide.
          From <strong>download Instagram Reels HD</strong> to saving Stories and posts, everything is handled in seconds.
          Bookmark this page and use it anytime you need a fast, free, and safe <strong>Instagram media downloader</strong>.
        </p>
      </div>
      </div>
    </section>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [sidebar, setSidebar] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [page, setPage] = useState(() => window.location.hash.replace('#', '') || 'home')

  // Sync hash ↔ page state — supports blog/slug
  useEffect(() => {
    const onHash = () => setPage(window.location.hash.replace('#', '') || 'home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (p) => {
    window.location.hash = p === 'home' ? '' : p
    setPage(p)
    setSidebar(false)
    window.scrollTo(0, 0)
  }

  // Derived: are we on a blog post?
  const isBlogPost = page.startsWith('blog/')
  const blogSlug = isBlogPost ? page.replace('blog/', '') : null
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoData, setVideoData] = useState(null)
  const [downloading, setDownloading] = useState(false)
  const [adPopup, setAdPopup] = useState(false)
  const [toast, setToast] = useState(null) // { text, sub }
  const toastTimer = useRef(null)
  const t = T[lang] || T.en

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const showToast = (text, sub) => {
    setToast({ text, sub })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 3000)
  }

  const handleFetch = async () => {
    const trimmed = url.trim()
    if (!trimmed) return setError(t.invalidUrl)
    if (!isValidUrl(trimmed)) return setError(t.invalidUrl)
    setError('')
    setVideoData(null)
    setLoading(true)
    setAdPopup(true)
    try {
      const res = await apiFetch('/api/info', {
        method: 'POST',
        body: JSON.stringify({ url: trimmed }),
      })
      const data = await res.json()
      if (data.success) {
        setVideoData(data)
        const isStory = trimmed.includes('/stories/')
        showToast(isStory ? t.toastStory : t.toastReel, t.toastSub)
      } else {
        setError(data.error || 'Failed to fetch video')
      }
    } catch {
      setError('Network error. Is the server running?')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (overrideUrl, overrideFilename) => {
    if (!videoData) return
    loadPopunder()
    setDownloading(true)
    try {
      const res = await apiFetch('/api/download', {
        method: 'POST',
        body: JSON.stringify({
          url: url.trim(),
          directUrl: overrideUrl || videoData.downloadUrl,
          filename: overrideFilename || videoData.filename,
        }),
      })
      if (!res.ok) throw new Error('Download failed')
      const blob = await res.blob()
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = overrideFilename || videoData.filename || 'instagram_media'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(a.href)
    } catch (e) {
      setError(`Download failed: ${e.message}`)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <>
      {/* Toast */}
      <div className={`toast ${toast ? 'show' : ''}`}>
        <div className="toast-icon">
          <CheckCircle size={16} color="#fff" />
        </div>
        <div>
          <div className="toast-text">{toast?.text}</div>
          <div className="toast-sub">{toast?.sub}</div>
        </div>
      </div>

      {/* Ad Popup during fetch */}
      {adPopup && <AdPopup onClose={() => setAdPopup(false)} loading={loading} />}

      {/* Sidebar overlay */}
      <div className={`sidebar-overlay ${sidebar ? 'open' : ''}`} onClick={() => setSidebar(false)} />

      {/* Sidebar */}
      <aside className={`sidebar ${sidebar ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <Download size={20} color="#fff" />
            </div>
            <span>Insta Saver</span>
          </div>
          <button className="sidebar-close" onClick={() => setSidebar(false)}>
            <X size={16} />
          </button>
        </div>
        <div className="sidebar-body">
          {/* Theme toggle in sidebar */}
          <div className="sidebar-section-title"><Palette size={12} style={{display:'inline',marginRight:4}} />{t.theme}</div>
          <div className="sidebar-row" onClick={() => setDark(d => !d)}>
            <div className="sidebar-row-left">
              {dark ? <Moon size={18} color="var(--accent)" /> : <Sun size={18} color="var(--g1)" />}
              {t.theme}
            </div>
            <div className={`toggle-switch ${dark ? 'on' : ''}`}>
              <div className="toggle-switch-thumb" />
            </div>
          </div>

          {/* More — nav links submenu */}
          <div className="sidebar-section-title">Navigation</div>
          <div className={`sidebar-row more-btn`} onClick={() => setMoreOpen(o => !o)}>
            <div className="sidebar-row-left">
              <Menu size={18} color="var(--accent)" />
              More
            </div>
            <ChevronDown size={16} color="var(--text2)" style={{transform: moreOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.25s'}} />
          </div>
          {moreOpen && (
            <div className="more-submenu">
              {[
                { icon: <Home size={16} color="var(--accent)" />, label: 'Home', p: 'home' },
                { icon: <BookOpen size={16} color="var(--accent)" />, label: 'About', p: 'about' },
                { icon: <Newspaper size={16} color="var(--accent)" />, label: 'Blogs', p: 'blogs' },
              ].map(item => (
                <div key={item.p} className="submenu-item" onClick={() => navigate(item.p)}>
                  {item.icon}{item.label}
                </div>
              ))}
            </div>
          )}

          <div className="sidebar-section-title"><Globe size={12} style={{display:'inline',marginRight:4}} />{t.language}</div>
          {LANGUAGES.map(l => (
            <div
              key={l.code}
              className={`lang-option ${lang === l.code ? 'active' : ''}`}
              onClick={() => { setLang(l.code); setSidebar(false) }}
            >
              {l.label}
              {lang === l.code && <CheckCircle size={16} color="var(--accent)" />}
            </div>
          ))}

          <div className="sidebar-section-title">Legal</div>
          {[
            { icon: <Shield size={18} color="var(--accent)" />, label: 'Privacy Policy', p: 'privacy' },
            { icon: <FileText size={18} color="var(--accent)" />, label: 'Terms of Use', p: 'terms' },
            { icon: <AlertTriangle size={18} color="var(--accent)" />, label: 'Disclaimer', p: 'disclaimer' },
          ].map(item => (
            <div key={item.p} className="sidebar-row" onClick={() => navigate(item.p)}>
              <div className="sidebar-row-left">{item.icon}{item.label}</div>
              <ChevronRight size={16} color="var(--text2)" />
            </div>
          ))}
        </div>
      </aside>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => navigate('home')} style={{cursor:'pointer'}}>
          <div className="logo-icon-wrap">
            <Download size={20} color="#fff" />
          </div>
          <span className="logo-name grad-text">Insta Saver</span>
        </div>
        <div className="nav-right">
          {/* Desktop nav links */}
          <div className="nav-links">
            <button className={`nav-link ${page === 'home' ? 'active' : ''}`} onClick={() => navigate('home')}>
              <Home size={15} /> Home
            </button>
            <button className={`nav-link ${page === 'about' ? 'active' : ''}`} onClick={() => navigate('about')}>
              <BookOpen size={15} /> About
            </button>
            <button className={`nav-link ${page === 'blogs' ? 'active' : ''}`} onClick={() => navigate('blogs')}>
              <Newspaper size={15} /> Blogs
            </button>
          </div>
          {/* Theme toggle — desktop only */}
          <button
            className={`theme-toggle desktop-only ${dark ? 'dark' : ''}`}
            onClick={() => setDark(d => !d)}
            title="Toggle theme"
          >
            <div className="theme-toggle-thumb">
              {dark
                ? <Moon size={10} color="var(--g3)" />
                : <Sun size={10} color="var(--g1)" />
              }
            </div>
          </button>
          {/* Hamburger — always visible */}
          <button className="menu-btn" onClick={() => setSidebar(true)}>
            <Menu size={18} />
          </button>
        </div>
      </nav>

      {page === 'home' || page === '' ? null : null}

      {/* Main */}
      {page === 'privacy' ? <PrivacyPolicy /> :
       page === 'terms'   ? <TermsOfUse /> :
       page === 'disclaimer' ? <Disclaimer /> :
       page === 'about'   ? <About /> :
       isBlogPost ? <BlogPost blogId={blogSlug} onBack={() => navigate('blogs')} /> :
       page === 'blogs'   ? <Blogs onBlogClick={slug => navigate('blog/' + slug)} /> :
      <>
        <main className="main hero-section">
          <div className="hero">
            <div className="hero-badge">
              <Camera size={13} color="var(--accent)" />
              {t.badge}
            </div>
            <h1 className="grad-text">{t.heading}</h1>
            <p>{t.tagline}</p>
          </div>

          {/* Input */}
          <div className="input-card">
            <div className="input-row">
              <Camera size={18} color="var(--accent)" />
              <input
                className="url-input"
                type="url"
                placeholder={t.placeholder}
                value={url}
                onChange={e => { setUrl(e.target.value); setError('') }}
                onKeyDown={e => e.key === 'Enter' && handleFetch()}
                autoComplete="off"
              />
              <button className="fetch-btn" onClick={handleFetch} disabled={loading}>
                {loading
                  ? <div className="spin-sm" />
                  : <Download size={20} color="#fff" />
                }
              </button>
            </div>
            <div className="input-hint">
              <Play size={11} />
              {t.hint}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="error-bar">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="loading-wrap">
              <div className="loading-rings" />
              <div className="loading-text">{t.fetchingTitle}</div>
              <div className="loading-sub">{t.fetchingSub}</div>
              <div className="loading-dots">
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Result */}
          {videoData && !loading && (
            <div className="result-card">
              {videoData.isImage ? (
                <img
                  className="result-video"
                  src={videoData.downloadUrl}
                  alt={videoData.title}
                  style={{width:'100%', maxHeight:'360px', objectFit:'contain', background:'#000', display:'block'}}
                />
              ) : (
                <video
                  className="result-video"
                  src={videoData.downloadUrl}
                  controls
                  playsInline
                  muted
                />
              )}
              <div className="result-info">
                <div className="result-title">{videoData.title}</div>
                <div className="result-meta">
                  {videoData.uploader && `${videoData.uploader} • `}
                  {videoData.isImage ? `📷 Photo${videoData.images?.length > 1 ? ` (${videoData.images.length} images)` : ''}` : formatDuration(videoData.duration)}
                </div>
              </div>
              <div className="result-actions">
                {videoData.isImage && videoData.images?.length > 1 ? (
                  <>
                    {videoData.images.map((img, i) => (
                      <button key={img.id} className="download-btn" style={{marginBottom: 4}} onClick={() => handleDownload(img.url, `instagram_${img.id}.${img.ext}`)}>
                        <Download size={16} />Photo {i + 1}
                      </button>
                    ))}
                  </>
                ) : (
                  <button className="download-btn" onClick={() => handleDownload()} disabled={downloading}>
                    {downloading
                      ? <><div className="spin-sm" />{t.downloading}</>
                      : <><Download size={18} />{videoData.isImage ? t.downloadImage : t.downloadVideo}</>
                    }
                  </button>
                )}
                <button className="open-btn" onClick={() => window.location.reload()}>
                  <RefreshCw size={15} />
                  {t.downloadAnother}
                </button>
              </div>
            </div>
          )}

          {/* Quick steps mini bar */}
          <div className="quick-steps">
            <span className="quick-steps-label">How to use</span>
            <div className="quick-steps-list">
              {[['1', 'Copy'], ['2', 'Paste'], ['3', 'Download']].map(([n, label]) => (
                <div key={n} className="quick-step">
                  <span className="quick-step-num">{n}</span>
                  <span className="quick-step-text grad-text">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Ad — full width, hidden on mobile */}
          <DesktopAd />

          {/* Mobile Ads — 2 rows, hidden on desktop */}
          <MobileAd1 />
          <MobileAd2 />

        </main>

        {/* How To Use — full width */}
        <HowToUse />

        {/* SEO Section — full width */}
        <SeoSection />
      </>
      }

      <footer className="footer">
        Instagram Reel and Story Downloader
        <br />
        <div className="footer-links">
          <span onClick={() => navigate('privacy')}>Privacy Policy</span>
          <span className="footer-dot">·</span>
          <span onClick={() => navigate('terms')}>Terms of Use</span>
          <span className="footer-dot">·</span>
          <span onClick={() => navigate('disclaimer')}>Disclaimer</span>
        </div>
        <span style={{fontSize:'11px'}}>© 2026 Insta Saver. All rights reserved.</span>
      </footer>
    </>
  )
}
