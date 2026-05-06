'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Basketball as Health',
    username: 'basketballashealth',
    bio: '🏀 Sport for Life\n\nWe believe basketball is the complete system for physical health & cognitive development.\n\nVision: A world where every child has access to basketball as a pathway to lifelong health.\n\nMission: To transform lives through basketball by integrating sport with health education.',
    website: 'thynkunlimited.org/basketball',
    posts: 248,
    followers: 52400,
    following: 1203,
  })

  const [editedProfile, setEditedProfile] = useState(profile)

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const gridPosts = [
    { id: '1', type: 'image' },
    { id: '2', type: 'image' },
    { id: '3', type: 'image' },
    { id: '4', type: 'image' },
    { id: '5', type: 'image' },
    { id: '6', type: 'image' },
  ]

  return (
    <div className="profile-page">
      <header className="profile-header-static">
        <div className="header-content">
          <div className="edit-actions">
            <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            <button className="settings-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <section className="profile-section">
        <div className="profile-top">
          <div className="profile-pic-wrapper">
            <div className="profile-pic">BH</div>
          </div>
          <div className="profile-stats">
            <div className="stat-item">
              <div className="stat-number">{profile.posts}</div>
              <div className="stat-label">posts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{(profile.followers / 1000).toFixed(1)}K</div>
              <div className="stat-label">followers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{profile.following.toLocaleString()}</div>
              <div className="stat-label">following</div>
            </div>
          </div>
        </div>

        <div className="profile-info">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                value={editedProfile.name}
                onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                className="edit-input"
                placeholder="Name"
              />
              <textarea
                value={editedProfile.bio}
                onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                className="edit-textarea"
                placeholder="Bio"
                rows={4}
              />
              <input
                type="text"
                value={editedProfile.website}
                onChange={(e) => setEditedProfile({ ...editedProfile, website: e.target.value })}
                className="edit-input"
                placeholder="Website"
              />
              <div className="edit-actions-form">
                <button onClick={handleSave} className="save-btn">
                  Save
                </button>
                <button onClick={() => setIsEditing(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1 className="profile-name">{profile.name}</h1>
              <p className="profile-bio">{profile.bio}</p>
              <a
                href={`https://${profile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                {profile.website}
              </a>
            </>
          )}
        </div>

        <div className="profile-actions">
          <button className="action-btn">Edit Profile</button>
          <button className="action-btn">Share Profile</button>
        </div>
      </section>

      <nav className="tab-nav">
        <Link href="/" className="tab-item">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="2" y="2" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
          <span>Posts</span>
        </Link>
        <Link href="/reels" className="tab-item">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect x="2" y="3" width="8" height="1.5" stroke="currentColor" fill="none" />
            <rect x="2" y="5.25" width="8" height="1.5" stroke="currentColor" fill="none" />
            <rect x="2" y="7.5" width="8" height="1.5" stroke="currentColor" fill="none" />
          </svg>
          <span>Reels</span>
        </Link>
        <Link href="/profile" className="tab-item active">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M6 9v3M6 3V0" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>Tagged</span>
        </Link>
      </nav>

      <section className="posts-grid">
        {gridPosts.map((post) => (
          <Link key={post.id} href={`/post/${post.id}`} className="grid-post">
            <div className="grid-post-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </Link>
        ))}
      </section>

      <style jsx>{`
        .profile-page {
          width: 100%;
        }

        .profile-header-static {
          display: flex;
          justify-content: flex-end;
          padding: 12px 16px;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
        }

        .edit-btn,
        .settings-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 239, 214, 0.1);
          transition: background 0.2s;
        }

        .edit-btn:hover,
        .settings-btn:hover {
          background: rgba(245, 239, 214, 0.2);
        }

        .edit-btn svg,
        .settings-btn svg {
          stroke: var(--cream);
        }

        .profile-section {
          padding: 0 20px 24px;
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 20px;
        }

        .profile-pic-wrapper {
          position: relative;
        }

        .profile-pic {
          width: 87px;
          height: 87px;
          border-radius: 50%;
          background: var(--royal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--cream);
        }

        .profile-stats {
          display: flex;
          gap: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 18px;
          letter-spacing: 0.02em;
          color: var(--cream);
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: rgba(245, 239, 214, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .profile-info {
          margin-bottom: 16px;
        }

        .profile-name {
          font-family: var(--font-display);
          font-size: 16px;
          letter-spacing: 0.04em;
          color: var(--cream);
          margin-bottom: 4px;
        }

        .profile-bio {
          font-size: 13px;
          color: rgba(245, 239, 214, 0.7);
          line-height: 1.5;
          margin-bottom: 8px;
          white-space: pre-line;
        }

        .profile-link {
          color: var(--royal-light);
          font-weight: 500;
          font-size: 13px;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .edit-input,
        .edit-textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(245, 239, 214, 0.05);
          border: 1px solid rgba(245, 239, 214, 0.15);
          border-radius: 8px;
          color: var(--cream);
          font-size: 14px;
        }

        .edit-textarea {
          resize: none;
        }

        .edit-actions-form {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .save-btn {
          background: var(--royal);
          color: var(--cream);
          padding: 8px 20px;
          border-radius: 6px;
          font-weight: 500;
        }

        .cancel-btn {
          background: transparent;
          color: var(--cream);
          padding: 8px 20px;
          border-radius: 6px;
          border: 1px solid var(--cream);
        }

        .profile-actions {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          flex: 1;
          background: rgba(245, 239, 214, 0.1);
          color: var(--cream);
          padding: 8px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .action-btn:hover {
          background: rgba(245, 239, 214, 0.2);
        }

        .tab-nav {
          display: flex;
          border-bottom: 1px solid rgba(245, 239, 214, 0.1);
        }

        .tab-item {
          flex: 1;
          text-align: center;
          padding: 14px 0;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 239, 214, 0.5);
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .tab-item.active {
          color: var(--cream);
        }

        .tab-item.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 2px;
          background: var(--cream);
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          padding: 2px 0;
        }

        .grid-post {
          aspect-ratio: 1;
          background: var(--royal);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .grid-post:hover {
          opacity: 0.8;
        }

        .grid-post-content svg {
          stroke: var(--cream);
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}