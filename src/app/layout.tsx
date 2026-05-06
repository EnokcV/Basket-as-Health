'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Basketball as Health — Instagram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="app-container">
          {/* Top Navigation */}
          <nav className="top-nav">
            <Link href="/" className="nav-brand">
              basketballashealth
            </Link>
            <div className="nav-actions">
              <Link href="/create" className="nav-icon-link" title="Create Post">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </Link>
              <Link href="/notifications" className="nav-icon-link" title="Notifications">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </Link>
              <Link href="/messages" className="nav-icon-link" title="Messages">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </Link>
            </div>
          </nav>

          {/* Main Content */}
          <main className="main-content">{children}</main>

          {/* Bottom Navigation */}
          <nav className="bottom-nav">
            <Link href="/" className={`bottom-nav-item ${pathname === '/' ? 'active' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
            <Link href="/search" className={`bottom-nav-item ${pathname === '/search' ? 'active' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search</span>
            </Link>
            <Link href="/create" className={`bottom-nav-item ${pathname === '/create' ? 'active' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <span>Create</span>
            </Link>
            <Link href="/reels" className={`bottom-nav-item ${pathname === '/reels' ? 'active' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
              </svg>
              <span>Reels</span>
            </Link>
            <Link href="/profile" className={`bottom-nav-item ${pathname === '/profile' ? 'active' : ''}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.22l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.22l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>Profile</span>
            </Link>
          </nav>

          <style jsx>{`
            .app-container {
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }

            .top-nav {
              position: sticky;
              top: 0;
              z-index: 100;
              background: rgba(15, 15, 26, 0.95);
              backdrop-filter: blur(12px);
              border-bottom: 1px solid rgba(245, 239, 214, 0.08);
              padding: 12px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .nav-brand {
              font-family: var(--font-display);
              font-size: 22px;
              letter-spacing: 0.05em;
              color: var(--cream);
            }

            .nav-actions {
              display: flex;
              gap: 16px;
            }

            .nav-icon-link {
              width: 24px;
              height: 24px;
              cursor: pointer;
              opacity: 0.8;
              transition: opacity 0.2s;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .nav-icon-link:hover {
              opacity: 1;
            }

            .nav-icon-link svg {
              stroke: var(--cream);
            }

            .main-content {
              flex: 1;
              max-width: 470px;
              width: 100%;
              margin: 0 auto;
              padding-bottom: 70px;
            }

            .bottom-nav {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(15, 15, 26, 0.95);
              backdrop-filter: blur(12px);
              border-top: 1px solid rgba(245, 239, 214, 0.08);
              display: flex;
              justify-content: space-around;
              padding: 12px 20px 14px;
              z-index: 100;
              max-width: 470px;
              margin: 0 auto;
              left: 0;
              right: 0;
            }

            .bottom-nav-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 2px;
              cursor: pointer;
              opacity: 0.6;
              transition: opacity 0.2s;
              font-size: 9px;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: var(--cream);
            }

            .bottom-nav-item:hover,
            .bottom-nav-item.active {
              opacity: 1;
            }

            .bottom-nav-item svg {
              stroke: currentColor;
            }
          `}</style>
        </div>
      </body>
    </html>
  )
}