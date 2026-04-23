import { useEffect } from 'react'
import { ArrowRight, Clock, TrendingUp, Star, Flame, BookOpen, Zap, ArrowLeft, Download } from 'lucide-react'
import BlogAd from '../components/BlogAd.jsx'

export const BLOGS = [
  {
    id: 'download-instagram-reels-without-watermark',
    badge: 'Trending', badgeColor: '#e1306c',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    title: 'How to Download Instagram Reels Without Watermark (2026 Guide)',
    desc: 'The complete step-by-step guide to saving Instagram Reels in full HD quality with zero watermarks — free, fast, and no app needed.',
    readTime: '5 min read', date: 'Jan 12, 2026',
    metaDesc: 'Learn how to download Instagram Reels without watermark in 2026. Free HD Instagram Reel downloader — no login, no app, instant download.',
  },
  {
    id: 'free-instagram-video-downloader-online',
    badge: 'Popular', badgeColor: '#f58529',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    title: 'Free Instagram Video Downloader Online (Fast & HD)',
    desc: 'Discover the fastest free Instagram video downloader that works directly in your browser — no login, no install, HD quality every time.',
    readTime: '4 min read', date: 'Jan 18, 2026',
    metaDesc: 'Free Instagram video downloader online. Download Instagram videos, Reels and Stories in HD quality instantly — no app or login required.',
  },
  {
    id: 'best-instagram-reel-downloader-no-login',
    badge: 'Top Pick', badgeColor: '#8134af',
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    title: 'Best Instagram Reel Downloader Tool (No Login Required)',
    desc: "We tested 10+ Instagram Reel downloader tools in 2026. Here's the one that wins on speed, quality, and privacy — no account needed.",
    readTime: '6 min read', date: 'Jan 25, 2026',
    metaDesc: 'Best Instagram Reel downloader with no login required. Compare top tools and find the fastest, safest way to save Reels in 2026.',
  },
  {
    id: 'download-instagram-stories-anonymously',
    badge: 'Guide', badgeColor: '#10b981',
    img: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=800&q=80',
    title: 'Download Instagram Stories Anonymously (Step-by-Step)',
    desc: "Want to view and save Instagram Stories without the person knowing? This guide shows you exactly how to do it anonymously in 2026.",
    readTime: '5 min read', date: 'Feb 2, 2026',
    metaDesc: 'Download Instagram Stories anonymously in 2026. View and save Stories without the account owner knowing — step-by-step guide.',
  },
  {
    id: 'save-instagram-photos-hd-quality',
    badge: 'Popular', badgeColor: '#f58529',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    title: 'Save Instagram Photos in HD Quality (Easy Method)',
    desc: 'Stop screenshotting blurry photos. Learn the easiest method to download Instagram photos in original HD resolution directly to your device.',
    readTime: '3 min read', date: 'Feb 8, 2026',
    metaDesc: 'Save Instagram photos in HD quality easily. Download Instagram images in full resolution without losing quality — free method 2026.',
  },
  {
    id: 'how-to-make-viral-instagram-reels-2026',
    badge: 'Trending', badgeColor: '#e1306c',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    title: 'How to Make Viral Instagram Reels in 2026',
    desc: 'The proven formula behind viral Reels in 2026 — hooks, audio trends, editing tricks, and posting strategies that top creators use daily.',
    readTime: '8 min read', date: 'Feb 14, 2026',
    metaDesc: 'How to make viral Instagram Reels in 2026. Proven strategies, hooks, trending audio tips and editing tricks to explode your reach.',
  },
  {
    id: 'instagram-algorithm-explained-grow-fast',
    badge: 'Must Read', badgeColor: '#dd2a7b',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    title: 'Instagram Algorithm Explained (Grow Fast in 30 Days)',
    desc: 'Crack the Instagram algorithm in 2026. Understand exactly what signals boost your reach and how to grow your account fast in just 30 days.',
    readTime: '7 min read', date: 'Feb 20, 2026',
    metaDesc: 'Instagram algorithm explained 2026. Learn how the algorithm works and the exact steps to grow your Instagram account fast in 30 days.',
  },
  {
    id: 'best-time-to-post-reels-maximum-views',
    badge: 'Top Pick', badgeColor: '#8134af',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
    title: 'Best Time to Post Reels for Maximum Views',
    desc: 'Timing is everything on Instagram. We analyzed millions of Reels to find the exact best times to post for maximum reach and engagement in 2026.',
    readTime: '5 min read', date: 'Mar 1, 2026',
    metaDesc: 'Best time to post Instagram Reels for maximum views in 2026. Data-backed posting schedule to boost reach and engagement.',
  },
  {
    id: '0-to-10k-followers-instagram-real-strategy',
    badge: 'Guide', badgeColor: '#10b981',
    img: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80',
    title: '0 to 10K Followers on Instagram (Real Strategy)',
    desc: 'No bots, no fake followers. This is the real organic strategy that took accounts from zero to 10,000 genuine followers using Reels and consistency.',
    readTime: '9 min read', date: 'Mar 8, 2026',
    metaDesc: 'Grow from 0 to 10K Instagram followers with a real organic strategy. No bots, no shortcuts — just proven Reels growth tactics for 2026.',
  },
  {
    id: 'why-reels-not-getting-views-fix',
    badge: 'Trending', badgeColor: '#e1306c',
    img: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80',
    title: 'Why Your Reels Are Not Getting Views (Fix This)',
    desc: "If your Reels are stuck at 100–200 views, something is wrong. Here are the 7 most common reasons your Reels aren't reaching anyone — and how to fix each one.",
    readTime: '6 min read', date: 'Mar 15, 2026',
    metaDesc: 'Why your Instagram Reels are not getting views — and how to fix it. 7 proven fixes to boost your Reel reach and break out of low views in 2026.',
  },
]

const BLOG_CONTENT = {
  'download-instagram-reels-without-watermark': {
    sections: [
      { h2: 'What Is an Instagram Reel Watermark?', body: 'When you share an Instagram Reel using the native share button, Instagram adds a watermark — your username and the Instagram logo — to the video. This is fine for sharing, but if you want a clean copy of the video for editing, archiving, or offline viewing, that watermark gets in the way. The good news: there are free tools that let you download Instagram Reels without any watermark in full HD quality.' },
      { h2: 'How to Download Instagram Reels Without Watermark (Step by Step)', body: '1. Open Instagram and find the Reel you want to download.\n2. Tap the three-dot menu (⋯) on the Reel.\n3. Select "Copy Link" — the URL is now in your clipboard.\n4. Open Insta Saver (this site) in your browser.\n5. Paste the link into the input box and tap the download button.\n6. Your Reel loads instantly — tap "Download Video" to save it.\n\nThe downloaded file is the original MP4 with no watermark, no logo, and no quality loss.' },
      { h2: 'Why Use Insta Saver to Download Reels?', body: 'Insta Saver is a free Instagram Reel downloader that works directly in your browser. No app download, no account creation, no subscription. It supports Reels, Stories, Posts, and carousel photos. The tool fetches the original source file from Instagram\'s servers, so you always get the highest available quality — typically 1080p HD.' },
      { h2: 'Is It Safe to Download Instagram Reels?', body: 'Yes — using a reputable tool like Insta Saver is completely safe. We never store your links, never access your Instagram account, and never require any personal information. The download happens directly between Instagram\'s servers and your device. Always respect copyright and only download content you have permission to save.' },
      { h2: 'Frequently Asked Questions', body: 'Can I download private Instagram Reels? No — only public content can be downloaded without logging in.\n\nDoes the video have a watermark? No. Insta Saver downloads the original file with zero watermarks.\n\nWhat quality is the download? Full HD, matching the original upload quality.\n\nDoes it work on iPhone? Yes — works on all browsers including Safari on iOS.' },
    ]
  },
  'free-instagram-video-downloader-online': {
    sections: [
      { h2: 'Why You Need a Free Instagram Video Downloader', body: 'Instagram does not have a built-in download button for videos. Whether it\'s a Reel you want to watch offline, a Story that\'s about to expire, or a post you want to save — you need a third-party tool. The best Instagram video downloaders work online, require no installation, and deliver HD quality files in seconds.' },
      { h2: 'How to Use a Free Instagram Video Downloader Online', body: '1. Copy the Instagram video link from the app or website.\n2. Visit Insta Saver in any browser.\n3. Paste the URL into the input field.\n4. Click the fetch button — the video loads in a preview.\n5. Click "Download Video" — the MP4 saves to your device.\n\nThe entire process takes under 10 seconds. No login, no email, no payment.' },
      { h2: 'Supported Instagram Content Types', body: 'Insta Saver supports all major Instagram content formats:\n\n• Instagram Reels — short vertical videos up to 90 seconds\n• Instagram Stories — 15-second clips and photos\n• Instagram Posts — single videos and carousel posts\n• Instagram Photos — single and multi-image posts\n• IGTV — longer form videos\n\nAll downloads are in the original quality with no compression.' },
      { h2: 'Best Free Instagram Video Downloader Features', body: 'The best online Instagram video downloaders share these qualities: no watermarks, HD quality output, fast processing, mobile-friendly interface, no login required, and support for all content types. Insta Saver checks every box — and it\'s completely free with no hidden fees or limits.' },
    ]
  },
  'best-instagram-reel-downloader-no-login': {
    sections: [
      { h2: 'Why "No Login" Matters for Instagram Downloaders', body: 'Many Instagram downloader tools ask you to log in with your Instagram credentials. This is a major red flag — sharing your username and password with a third-party site puts your account at serious risk. The best Instagram Reel downloaders work without any login, using only the public URL of the content you want to save.' },
      { h2: 'Top Instagram Reel Downloader Tools Compared (2026)', body: 'We tested 10+ tools in 2026 across speed, quality, safety, and ease of use. Insta Saver ranked #1 for:\n\n• Speed: Average fetch time under 3 seconds\n• Quality: Always downloads in original HD resolution\n• Safety: No login, no data storage, no tracking\n• Compatibility: Works on all devices and browsers\n• Support: Handles Reels, Stories, Posts, and Photos' },
      { h2: 'How to Download Instagram Reels Without Logging In', body: '1. Find the Reel on Instagram (app or web).\n2. Copy the link via the share menu.\n3. Open Insta Saver — no account needed.\n4. Paste the link and hit download.\n5. Save the HD video to your device.\n\nThat\'s it. No forms, no verification, no waiting.' },
      { h2: 'Red Flags to Avoid in Instagram Downloaders', body: 'Watch out for tools that: ask for your Instagram password, require you to install a browser extension, show excessive ads or pop-ups, redirect you to suspicious sites, or claim to download private content. A legitimate downloader only needs the public URL — nothing else.' },
    ]
  },
  'download-instagram-stories-anonymously': {
    sections: [
      { h2: 'Can You View Instagram Stories Without Being Seen?', body: 'By default, Instagram notifies the account owner whenever someone views their Story. But there are legitimate ways to view and download public Instagram Stories without appearing in the viewer list — and without any special app or login.' },
      { h2: 'How to Download Instagram Stories Anonymously', body: '1. Find the Instagram profile whose Story you want to view.\n2. Copy their profile URL or the direct Story link.\n3. Open Insta Saver in your browser.\n4. Paste the Story URL into the input box.\n5. The Story loads in a preview — tap Download to save it.\n\nBecause the download happens server-side, your account never "views" the Story on Instagram — so you stay anonymous.' },
      { h2: 'Download Expiring Stories Before They Disappear', body: 'Instagram Stories disappear after 24 hours. If you want to save a Story — whether it\'s your own or a public creator\'s — you need to act fast. Insta Saver lets you download any public Story as a video or image file before it expires. Great for saving tutorials, announcements, or content you want to reference later.' },
      { h2: 'Important Notes on Anonymous Story Viewing', body: 'This method works for public accounts only. Private accounts require the viewer to follow them, and Instagram will still log the view. Always respect people\'s privacy and only save content from public accounts or your own profile. Insta Saver does not support downloading from private accounts.' },
    ]
  },
  'save-instagram-photos-hd-quality': {
    sections: [
      { h2: 'Why Screenshots Don\'t Work for Instagram Photos', body: 'Taking a screenshot of an Instagram photo gives you a compressed, low-resolution image that\'s cropped to your screen size. The original Instagram photo is typically 1080×1080px or higher — a screenshot captures maybe 30% of that quality. To get the real HD version, you need a proper Instagram photo downloader.' },
      { h2: 'How to Save Instagram Photos in HD Quality', body: '1. Open the Instagram post containing the photo.\n2. Tap the three-dot menu and select "Copy Link".\n3. Open Insta Saver in your browser.\n4. Paste the link — the photo loads in full resolution.\n5. Tap "Download Image" to save the original HD file.\n\nFor carousel posts with multiple photos, Insta Saver shows a download button for each image individually.' },
      { h2: 'Downloading Instagram Carousel Posts', body: 'Carousel posts (posts with multiple photos or videos) are fully supported. After pasting the link, Insta Saver detects all images in the carousel and shows individual download buttons for each one. You can download all photos from a carousel post in their original HD quality with a single visit.' },
      { h2: 'Best Uses for HD Instagram Photo Downloads', body: 'Saving HD Instagram photos is useful for: keeping a backup of your own posts, saving reference images for design or photography, archiving content from public creators you follow, downloading product photos for personal use, and preserving memories from public event coverage. Always use downloaded content responsibly.' },
    ]
  },
  'how-to-make-viral-instagram-reels-2026': {
    sections: [
      { h2: 'The Anatomy of a Viral Instagram Reel', body: 'Viral Reels in 2026 share a common structure: a strong hook in the first 1–2 seconds, a clear value proposition, trending or original audio, fast-paced editing, and a call to action. Understanding this formula is the first step to consistently creating content that reaches beyond your existing followers.' },
      { h2: 'Hook Strategies That Stop the Scroll', body: 'The first 2 seconds determine whether someone watches or scrolls. Top-performing hooks in 2026 include:\n\n• Bold text overlays with a surprising claim\n• Starting mid-action (no slow intros)\n• Asking a question your audience cares about\n• Showing the end result first, then explaining how\n• Using pattern interrupts — unexpected visuals or sounds\n\nTest multiple hooks for the same content and see which performs best.' },
      { h2: 'Audio Trends and How to Use Them', body: 'Trending audio gives your Reel a massive algorithmic boost. Instagram actively promotes Reels using trending sounds. Check the "Trending" audio section when creating a Reel. Use trending audio within the first 48–72 hours of it trending for maximum reach. Original audio that goes viral can also establish you as a creator others remix.' },
      { h2: 'Editing Techniques for Maximum Retention', body: 'High retention = more reach. Keep cuts fast (every 1–3 seconds), use text overlays to reinforce key points, add captions for silent viewers (60%+ watch without sound), use zoom transitions and motion effects sparingly, and always end with a clear CTA — "Follow for more", "Save this", or "Share with a friend".' },
      { h2: 'Posting Consistency and Content Batching', body: 'The algorithm rewards consistency. Aim for 4–7 Reels per week. Batch-create content — film 10–15 Reels in one session, then schedule them. Use Instagram\'s native scheduler or a tool like Later or Buffer. Consistent posting signals to the algorithm that you\'re an active creator worth promoting.' },
    ]
  },
  'instagram-algorithm-explained-grow-fast': {
    sections: [
      { h2: 'How the Instagram Algorithm Works in 2026', body: 'Instagram\'s algorithm in 2026 uses machine learning to predict what content each user is most likely to engage with. It evaluates signals like watch time, saves, shares, comments, and profile visits. The more of these signals your content generates, the wider Instagram distributes it — first to your followers, then to non-followers via Explore and Reels feeds.' },
      { h2: 'The 5 Key Ranking Signals', body: '1. Watch Time / Completion Rate — Did people watch your Reel to the end? Replays count double.\n2. Saves — The strongest engagement signal. Saves tell Instagram your content has lasting value.\n3. Shares — Shares to DMs and Stories extend your reach exponentially.\n4. Comments — Especially meaningful comments (not just emojis).\n5. Profile Visits — If your content makes people visit your profile, the algorithm takes notice.' },
      { h2: '30-Day Growth Plan Using the Algorithm', body: 'Week 1: Post 5 Reels using trending audio. Focus on one niche. Optimize your bio with keywords.\nWeek 2: Analyze which Reel performed best. Create 3 variations of that format. Engage with comments within the first hour of posting.\nWeek 3: Collaborate with one creator in your niche. Cross-promote. Use location tags and relevant hashtags.\nWeek 4: Post your best-performing content type daily. Add a CTA asking for saves and shares on every post.' },
      { h2: 'Common Algorithm Mistakes to Avoid', body: 'Posting inconsistently, using banned hashtags, buying fake followers or engagement, posting and ghosting (not engaging with comments), ignoring analytics, and switching niches frequently all hurt your algorithmic standing. The algorithm rewards accounts that behave like genuine, engaged community members.' },
    ]
  },
  'best-time-to-post-reels-maximum-views': {
    sections: [
      { h2: 'Does Posting Time Actually Matter for Reels?', body: 'Yes — but not as much as content quality. Posting at the right time gives your Reel an initial engagement boost, which signals the algorithm to push it further. A great Reel posted at a bad time will still eventually perform. But a great Reel posted at peak time gets that early momentum that can snowball into viral reach.' },
      { h2: 'Best Times to Post Instagram Reels (2026 Data)', body: 'Based on analysis of millions of Reels across niches, the highest-performing posting windows in 2026 are:\n\n• Monday–Friday: 7–9 AM, 12–2 PM, 7–9 PM (your audience\'s local time)\n• Saturday: 9 AM–12 PM\n• Sunday: 10 AM–2 PM\n\nThe worst times: 3–5 AM any day, and Friday evenings when people are offline.' },
      { h2: 'How to Find YOUR Best Posting Time', body: 'Generic data is a starting point — your audience is unique. Go to Instagram Insights → Audience → Most Active Times. This shows exactly when your specific followers are online. Post 30–60 minutes before your peak time so the algorithm has time to start distributing your content before the traffic spike.' },
      { h2: 'Time Zones and Global Audiences', body: 'If your audience is global, pick a time that overlaps multiple major time zones. 12 PM EST covers morning in the US West Coast, afternoon in Europe, and evening in parts of Asia. For India-focused audiences, 8–10 AM IST and 8–10 PM IST consistently outperform other windows.' },
    ]
  },
  '0-to-10k-followers-instagram-real-strategy': {
    sections: [
      { h2: 'The Truth About Growing on Instagram in 2026', body: 'Growing from 0 to 10K followers organically is harder than it was in 2020 — but it\'s still very achievable with the right strategy. The accounts that grow fastest in 2026 are hyper-niche, post Reels consistently, and focus on providing genuine value rather than chasing trends blindly.' },
      { h2: 'Step 1: Niche Down and Own It', body: 'The biggest mistake new accounts make is being too broad. "Fitness" is not a niche. "Home workouts for busy moms over 35" is a niche. The more specific you are, the faster you grow — because Instagram can accurately recommend your content to the right people, and those people are more likely to follow because your content speaks directly to them.' },
      { h2: 'Step 2: The Reels-First Content Strategy', body: 'Reels are the #1 growth driver on Instagram in 2026. Post 5–7 Reels per week for the first 60 days. Each Reel should: solve a specific problem, be under 30 seconds, use trending audio, have text overlays, and end with a follow CTA. Repurpose your best-performing Reels as Stories and carousel posts.' },
      { h2: 'Step 3: Engagement Loops and Community Building', body: 'Reply to every comment in the first hour. Ask questions in your captions. Create polls and quizzes in Stories. DM new followers with a genuine welcome message. Collaborate with 3–5 accounts in your niche for shoutout exchanges. The algorithm measures your engagement rate — a small engaged audience beats a large passive one every time.' },
      { h2: 'Step 4: Optimize Your Profile for Conversion', body: 'Your profile is your landing page. Use a clear, high-quality profile photo. Write a bio that states exactly who you help and how. Include a keyword in your name field (e.g., "Sarah | Fitness Coach"). Add a link in bio. Use Story Highlights to showcase your best content. A well-optimized profile converts profile visitors into followers at 2–3x the rate of an unoptimized one.' },
    ]
  },
  'why-reels-not-getting-views-fix': {
    sections: [
      { h2: 'Why Instagram Reels Get Stuck at Low Views', body: 'Getting stuck at 150–300 views is one of the most frustrating experiences for Instagram creators. It usually means the algorithm tested your Reel with a small audience and the initial engagement wasn\'t strong enough to justify wider distribution. Here are the 7 most common reasons — and exactly how to fix each one.' },
      { h2: 'Reason 1: Weak Hook (First 2 Seconds)', body: 'If people scroll past your Reel in the first 2 seconds, the algorithm kills its reach immediately. Fix: Start with movement, a bold statement, or a question. Never start with a logo, intro animation, or slow pan. Test your hook by watching your Reel with the sound off — if it\'s not visually compelling immediately, reshoot the opening.' },
      { h2: 'Reason 2: Low Watch Time / Completion Rate', body: 'Instagram measures what percentage of viewers watch your Reel to the end. Below 30% completion = limited reach. Fix: Keep Reels under 15–20 seconds when starting out. Use pattern interrupts every 3–4 seconds. Add text that teases what\'s coming ("wait for it...", "the best part is at the end"). Loop your video so it replays seamlessly.' },
      { h2: 'Reason 3: No Saves or Shares', body: 'Saves and shares are the most powerful engagement signals. If nobody is saving or sharing your Reel, the algorithm won\'t push it. Fix: Create "save-worthy" content — tips, tutorials, lists, or resources people want to reference later. Explicitly ask for saves: "Save this for later" in your caption or as a text overlay.' },
      { h2: 'Reason 4: Wrong Hashtags or No Hashtags', body: 'Using overly broad hashtags (#instagram, #viral) puts you in a pool of millions. Using irrelevant hashtags confuses the algorithm. Fix: Use 5–10 niche-specific hashtags with 10K–500K posts each. Mix hashtag sizes. Put hashtags in the caption, not the comments. Research what hashtags top creators in your niche use.' },
      { h2: 'Reason 5: Posting at the Wrong Time', body: 'Posting when your audience is asleep means zero initial engagement, which tanks your reach. Fix: Check Instagram Insights for your audience\'s most active hours. Post 30 minutes before peak time. Engage actively in the first 60 minutes after posting — reply to comments, respond to DMs, watch other creators\' content.' },
      { h2: 'Reason 6: Inconsistent Posting Schedule', body: 'Posting once a week then going silent for 2 weeks confuses the algorithm and your audience. Fix: Commit to a minimum of 4 Reels per week. Batch-create content on weekends. Use Instagram\'s native scheduler. Consistency signals to the algorithm that you\'re a reliable creator worth promoting to new audiences.' },
      { h2: 'Reason 7: Your Content Isn\'t Shareable', body: 'The ultimate test: would you share this Reel with a friend? If not, your audience won\'t either. Fix: Create content that makes people feel something — entertained, informed, inspired, or validated. The most shared Reels make viewers think "this is exactly me" or "my friend needs to see this". Emotion drives sharing.' },
    ]
  },
}

const BADGE_ICONS = {
  'Trending': <TrendingUp size={11} />,
  'Popular': <Flame size={11} />,
  'Top Pick': <Star size={11} />,
  'Guide': <BookOpen size={11} />,
  'Must Read': <Zap size={11} />,
}

export function BlogPost({ blogId, onBack }) {
  const blog = BLOGS.find(b => b.id === blogId)
  const content = BLOG_CONTENT[blogId]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (blog) {
      document.title = blog.title + ' | Insta Saver'
    }
    return () => { document.title = 'Insta Saver — Download Instagram Reels & Stories Free' }
  }, [blogId])

  if (!blog) return null

  const related = BLOGS.filter(b => b.id !== blogId).slice(0, 3)

  return (
    <article className="blog-post-page">
      <div className="blog-post-inner">
        <button className="blog-back-btn" onClick={onBack}>
          <ArrowLeft size={16} /> Back to Blogs
        </button>

        <div className="blog-post-badge" style={{'--badge-color': blog.badgeColor}}>
          {BADGE_ICONS[blog.badge]}{blog.badge}
        </div>

        <h1 className="blog-post-title">{blog.title}</h1>

        <div className="blog-post-meta">
          <Clock size={13} />{blog.readTime}
          <span className="blog-meta-dot">·</span>
          {blog.date}
        </div>

        <img src={blog.img} alt={blog.title} className="blog-post-hero-img" />

        <p className="blog-post-intro">{blog.desc}</p>

        {content?.sections.map((sec, i) => (
          <div key={i}>
            <div className="blog-post-section">
              <h2>{sec.h2}</h2>
              {sec.body.split('\n').map((line, j) =>
                line.trim() ? <p key={j}>{line}</p> : null
              )}
            </div>
            {/* Ad after section 1, 3, and last */}
            {(i === 0 || i === 2 || i === (content.sections.length - 1)) && (
              <BlogAd key={`ad-${i}`} />
            )}
          </div>
        ))}

        <div className="blog-post-cta">
          <div className="blog-cta-icon"><Download size={24} color="#fff" /></div>
          <div>
            <div className="blog-cta-title">Ready to Download Instagram Reels?</div>
            <div className="blog-cta-sub">Free, fast, HD quality — no login required.</div>
          </div>
          <button className="blog-cta-btn" onClick={() => { window.location.hash = ''; window.scrollTo(0,0) }}>Try Insta Saver Free</button>
        </div>

        <div className="blog-related">
          <div className="blog-related-title">Related Articles</div>
          <div className="blog-related-grid">
            {related.map(r => (
              <div key={r.id} className="blog-related-card" onClick={() => { window.location.hash = 'blog/' + r.id; window.scrollTo(0,0) }}>
                <img src={r.img} alt={r.title} className="blog-related-img" />
                <div className="blog-related-body">
                  <div className="blog-related-badge" style={{'--badge-color': r.badgeColor}}>{r.badge}</div>
                  <div className="blog-related-ttl">{r.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Blogs({ onBlogClick }) {
  return (
    <div className="blogs-page">
      <div className="blogs-hero">
        <div className="blogs-hero-label"><BookOpen size={13} color="var(--accent)" /> Our Blog</div>
        <h1 className="grad-text">Instagram Tips, Guides & Tools</h1>
        <p>Expert guides on downloading Instagram content, growing your account, and mastering Reels in 2026.</p>
      </div>
      <div className="blogs-grid-wrap">
        <div className="blogs-grid">
          {BLOGS.map(blog => (
            <article key={blog.id} className="blog-card" onClick={() => onBlogClick(blog.id)}>
              <div className="blog-card-img-wrap">
                <img src={blog.img} alt={blog.title} className="blog-card-img" loading="lazy" />
                <div className="blog-badge" style={{'--badge-color': blog.badgeColor}}>
                  {BADGE_ICONS[blog.badge]}{blog.badge}
                </div>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <Clock size={12} />{blog.readTime}
                  <span className="blog-meta-dot">·</span>{blog.date}
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-desc">{blog.desc}</p>
                <button className="blog-read-btn">Read Article <ArrowRight size={14} /></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
