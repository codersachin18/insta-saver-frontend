import { Download, Shield, Zap, Globe, Heart, Users, Star, CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <div className="about-hero">
        <div className="about-hero-icon">
          <Download size={32} color="#fff" />
        </div>
        <h1 className="grad-text">About Insta Saver</h1>
        <p>The fastest, free, and most reliable Instagram downloader — built for everyone.</p>
      </div>

      {/* About Us */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-section-label">Who We Are</div>
          <h2>About Us</h2>
          <p>
            Insta Saver is a free online tool that lets you download Instagram Reels, Stories, Posts,
            and Photos instantly — no login, no app install, no hassle. We built this tool because
            saving your favorite Instagram content should be simple, fast, and completely free.
          </p>
          <p>
            Whether you want to save a funny Reel to watch offline, keep a Story before it disappears,
            or download a photo from a post, Insta Saver handles it all in just a few seconds.
            Our platform works on all devices — mobile, tablet, and desktop — with no quality loss.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-section-label">Our Advantage</div>
          <h2>Why Choose Insta Saver?</h2>
          <p>There are many Instagram downloaders out there, but here's what makes us different:</p>
          <div className="why-grid">
            {[
              { icon: <Zap size={22} color="var(--g1)" />, title: 'Lightning Fast', desc: 'Our servers process your request in seconds. No waiting, no buffering — just instant downloads.' },
              { icon: <Shield size={22} color="var(--g2)" />, title: '100% Safe & Private', desc: 'We never store your data or the links you paste. Your privacy is our top priority.' },
              { icon: <Globe size={22} color="var(--g3)" />, title: 'Works Everywhere', desc: 'Fully responsive on mobile, tablet, and desktop. Download from any browser, any device.' },
              { icon: <Heart size={22} color="var(--accent)" />, title: 'Always Free', desc: 'No subscriptions, no hidden fees, no sign-up required. Insta Saver is and always will be free.' },
              { icon: <Star size={22} color="var(--g1)" />, title: 'HD Quality', desc: 'Download Instagram Reels and videos in the highest available quality — no compression, no watermarks.' },
              { icon: <Users size={22} color="var(--g2)" />, title: 'Multi-language', desc: 'Available in English, Hindi, French, and Portuguese so everyone can use it comfortably.' },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <div className="why-title">{item.title}</div>
                <div className="why-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-section">
        <div className="about-card stats-card">
          {[
            { num: '10M+', label: 'Downloads Served' },
            { num: '150+', label: 'Countries Reached' },
            { num: '4.9★', label: 'User Rating' },
            { num: '100%', label: 'Free Forever' },
          ].map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num grad-text">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-section-label">Our Mission</div>
          <h2>Built With a Purpose</h2>
          <p>
            Our mission is simple — make Instagram content accessible to everyone. We believe that
            if you love a piece of content, you should be able to save it and enjoy it anytime,
            even without an internet connection. Insta Saver was created with that belief at its core.
          </p>
          <p>
            We continuously improve our tool to support new Instagram formats, faster speeds, and
            a better user experience. Your feedback drives every update we ship.
          </p>
          <div className="about-checks">
            {['No watermarks on downloads', 'No account or login needed', 'Supports Reels, Stories, Posts & Photos', 'Works on iOS, Android, Windows & Mac'].map((c, i) => (
              <div key={i} className="about-check-item">
                <CheckCircle size={16} color="var(--accent)" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
