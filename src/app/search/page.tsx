'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const suggestedUsers = [
    { id: '1', username: 'fitcoach', avatar: 'FC', name: 'Fitness Coach', followers: '12K' },
    { id: '2', username: 'nutri.team', avatar: 'NT', name: 'Nutrition Team', followers: '8.5K' },
    { id: '3', username: 'pro.training', avatar: 'PT', name: 'Pro Training', followers: '25K' },
    { id: '4', username: 'youthHoops', avatar: 'YTF', name: 'Youth Basketball', followers: '45K' },
    { id: '5', username: 'healthrun', avatar: 'HR', name: 'Health Runner', followers: '5.2K' },
  ]

  const trendingTags = [
    { id: '1', tag: '#BelieveThat', posts: '12.5K' },
    { id: '2', tag: '#BasketballHealth', posts: '8.2K' },
    { id: '3', tag: '#SportIsHealth', posts: '5.1K' },
    { id: '4', tag: '#HoopsForLife', posts: '3.8K' },
  ]

  return (
    <div className="search-page">
      <div className="search-header">
        <div className="search-input-wrapper">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>

      <section className="search-section">
        <h2 className="section-title">Suggested</h2>
        <div className="users-list">
          {suggestedUsers.map((user) => (
            <Link key={user.id} href={`/user/${user.username}`} className="user-item">
              <div className="user-avatar">{user.avatar}</div>
              <div className="user-info">
                <span className="user-name">{user.username}</span>
                <span className="user-fullname">{user.name}</span>
              </div>
              <button className="follow-btn">Follow</button>
            </Link>
          ))}
        </div>
      </section>

      <section className="search-section">
        <h2 className="section-title">Trending</h2>
        <div className="trending-list">
          {trendingTags.map((tag) => (
            <Link key={tag.id} href={`/tag/${tag.tag}`} className="trending-item">
              <span className="trending-tag">{tag.tag}</span>
              <span className="trending-count">{tag.posts} posts</span>
            </Link>
          ))}
        </div>
      </section>

      <style jsx>{`
        .search-page {
          min-height: 100vh;
          background: var(--night);
        }

        .search-header {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(245, 239, 214, 0.08);
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(245, 239, 214, 0.08);
          border-radius: 8px;
          padding: 10px 14px;
        }

        .search-input-wrapper svg {
          stroke: rgba(245, 239, 214, 0.5);
        }

        .search-input {
          flex: 1;
          background: transparent;
          color: var(--cream);
          font-size: 14px;
        }

        .search-input::placeholder {
          color: rgba(245, 239, 214, 0.4);
        }

        .search-section {
          padding: 16px;
        }

        .section-title {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245, 239, 214, 0.5);
          margin-bottom: 16px;
        }

        .users-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .user-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .user-item:hover {
          background: rgba(245, 239, 214, 0.05);
        }

        .user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--royal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 14px;
          color: var(--cream);
        }

        .user-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--cream);
        }

        .user-fullname {
          font-size: 12px;
          color: rgba(245, 239, 214, 0.5);
        }

        .follow-btn {
          background: var(--royal);
          color: var(--cream);
          padding: 6px 16px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .follow-btn:hover {
          background: var(--royal-light);
        }

        .trending-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .trending-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .trending-item:hover {
          background: rgba(245, 239, 214, 0.05);
        }

        .trending-tag {
          font-size: 14px;
          font-weight: 500;
          color: var(--cream);
        }

        .trending-count {
          font-size: 12px;
          color: rgba(245, 239, 214, 0.5);
        }
      `}</style>
    </div>
  )
}