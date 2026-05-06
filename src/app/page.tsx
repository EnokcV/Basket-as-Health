'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './globals.css'

interface Story {
  id: string
  username: string
  avatar: string
  hasStory: boolean
  watched: boolean
}

interface Post {
  id: string
  username: string
  location: string
  imageUrl: string
  caption: string
  likes: number
  time: string
  isLiked: boolean
  isSaved: boolean
}

interface Profile {
  posts: number
  followers: number
  following: number
  name: string
  bio: string
  avatar: string
}

const demoStories: Story[] = [
  { id: '1', username: 'your story', avatar: 'BH', hasStory: false, watched: false },
  { id: '2', username: 'fitcoach', avatar: 'FC', hasStory: true, watched: false },
  { id: '3', username: 'nutri.team', avatar: 'NT', hasStory: true, watched: false },
  { id: '4', username: 'pro.training', avatar: 'PT', hasStory: true, watched: false },
  { id: '5', username: 'youthHoops', avatar: 'YTF', hasStory: true, watched: false },
  { id: '6', username: 'healthrun', avatar: 'HR', hasStory: false, watched: true },
]

const demoPosts: Post[] = [
  {
    id: '1',
    username: 'basketballashealth',
    location: 'Professional Court',
    imageUrl: 'calories',
    caption: "One hour of competitive basketball burns 650+ calories — more than running or cycling. That's the power of interval-based sport. 🏀 #BelieveThat #BasketballHealth",
    likes: 2847,
    time: '2 hours ago',
    isLiked: false,
    isSaved: false,
  },
  {
    id: '2',
    username: 'basketballashealth',
    location: 'Research Lab',
    imageUrl: 'brain',
    caption: 'Basketball develops executive function, spatial awareness, and decision-making skills. Sport is not just exercise — it\'s cognitive development in motion. 🏀 #BasketballAsHealth #CognitiveHealth',
    likes: 3291,
    time: '5 hours ago',
    isLiked: false,
    isSaved: false,
  },
  {
    id: '3',
    username: 'basketballashealth',
    location: 'Global Community',
    imageUrl: 'community',
    caption: 'Our community is growing strong! Every child deserves access to basketball as a pathway to lifelong health. Join the movement. 🌐 #BasketballAsHealth #Community',
    likes: 4128,
    time: '8 hours ago',
    isLiked: false,
    isSaved: false,
  },
  {
    id: '4',
    username: 'basketballashealth',
    location: 'Mission Statement',
    imageUrl: 'mission',
    caption: 'Our vision: A world where every child has access to basketball as a pathway to lifelong health. Our mission: Transform lives through basketball by integrating sport with health education. 🏀 #BelieveThat #Vision #Mission',
    likes: 5203,
    time: '12 hours ago',
    isLiked: false,
    isSaved: false,
  },
]

const demoProfile: Profile = {
  posts: 248,
  followers: 52400,
  following: 1203,
  name: 'Basketball as Health',
  bio: '🏀 Sport for Life\n\nWe believe basketball is the complete system for physical health & cognitive development.\n\nVision: A world where every child has access to basketball as a pathway to lifelong health.\n\nMission: To transform lives through basketball by integrating sport with health education.',
  avatar: 'BH',
}

export default function Home() {
  const [stories, setStories] = useState<Story[]>(demoStories)
  const [posts, setPosts] = useState<Post[]>(demoPosts)
  const [profile] = useState<Profile>(demoProfile)
  const [loading, setLoading] = useState(false)

  const toggleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        }
      }
      return post
    }))
  }

  const toggleSave = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, isSaved: !post.isSaved }
      }
      return post
    }))
  }

  return (
    <div className="home-page">
      <section className="stories-section">
        {stories.map(story => (
          <Link key={story.id} href={`/story/${story.id}`} className="story-item">
            <div className={`story-ring ${story.hasStory && !story.watched ? 'has-story' : ''} ${story.watched ? 'watched' : ''}`}>
              <div className="story-avatar">{story.avatar}</div>
            </div>
            <span className="story-label">{story.username}</span>
          </Link>
        ))}
      </section>

      <header className="profile-header">
        <div className="profile-top">
          <Link href="/profile" className="profile-pic-link">
            <div className="profile-pic">{profile.avatar}</div>
          </Link>
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
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-bio">{profile.bio}</p>
        </div>
        <a href="https://thynkunlimited.org/basketball" target="_blank" className="profile-link">
          thynkunlimited.org/basketball
        </a>
      </header>

      <nav className="tab-nav">
        <Link href="/" className="tab-item active">
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
        <Link href="/profile" className="tab-item">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M6 9v3M6 3V0" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>Tagged</span>
        </Link>
      </nav>

      <section className="feed-posts">
        {posts.map(post => (
          <article key={post.id} className="post">
            <div className="post-header">
              <Link href="/profile" className="post-avatar-text">BH</Link>
              <div className="post-user">
                <span className="post-username">{post.username}</span>
                <span className="post-location">{post.location}</span>
              </div>
              <button className="post-more">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="3" r="1.5" fill="currentColor" />
                  <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                  <circle cx="10" cy="17" r="1.5" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="post-image" onClick={() => toggleLike(post.id)}>
              <PostContent type={post.imageUrl} />
            </div>
            <div className="post-content">
              <div className="post-actions">
                <button className={`post-action ${post.isLiked ? 'liked' : ''}`} onClick={() => toggleLike(post.id)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={post.isLiked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.22l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.22l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <Link href={`/post/${post.id}`} className="post-action">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </Link>
                <button className="post-action" onClick={() => toggleSave(post.id)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill={post.isSaved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
              </div>
              <div className="post-likes">{post.likes.toLocaleString()} likes</div>
              <div className="post-caption">
                <span className="user-tag">{post.username}</span> {post.caption}
              </div>
              <Link href={`/post/${post.id}`} className="post-view-comments">View all comments</Link>
              <div className="post-time">{post.time}</div>
            </div>
          </article>
        ))}
      </section>

      <style jsx>{`
        .home-page { width: 100%; }
        .stories-section { background: rgba(245,239,214,0.03); border-bottom: 1px solid rgba(245,239,214,0.06); padding: 16px 16px 20px; display: flex; gap: 14px; overflow-x: auto; scrollbar-width: none; }
        .stories-section::-webkit-scrollbar { display: none; }
        .story-item { display: flex; flex-direction: column; align-items: center; gap: 6px; min-width: 66px; cursor: pointer; }
        .story-ring { width: 66px; height: 66px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative; }
        .story-ring::before { content: ''; position: absolute; inset: -3px; border-radius: 50%; background: linear-gradient(135deg, var(--royal-light), var(--royal), var(--forest)); }
        .story-ring.has-story::before { background: linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
        .story-ring.watched::before { background: rgba(245,239,214,0.2); }
        .story-avatar { width: 58px; height: 58px; border-radius: 50%; background: var(--royal); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 20px; color: var(--cream); position: relative; z-index: 1; }
        .story-ring:nth-child(1) .story-avatar { border: 2px dashed rgba(245,239,214,0.3); }
        .story-label { font-family: var(--font-mono); font-size: 10px; color: rgba(245,239,214,0.6); text-transform: lowercase; max-width: 64px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .profile-header { padding: 24px 20px; border-bottom: 1px solid rgba(245,239,214,0.06); }
        .profile-top { display: flex; align-items: center; gap: 20px; margin-bottom: 20px; }
        .profile-pic-link { cursor: pointer; }
        .profile-pic { width: 87px; height: 87px; border-radius: 50%; background: var(--royal); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 32px; color: var(--cream); border: 3px solid var(--royal); }
        .profile-stats { display: flex; gap: 28px; }
        .stat-item { text-align: center; }
        .stat-number { font-family: var(--font-display); font-size: 18px; letter-spacing: 0.02em; color: var(--cream); }
        .stat-label { font-family: var(--font-mono); font-size: 10px; color: rgba(245,239,214,0.5); text-transform: uppercase; letter-spacing: 0.05em; }
        .profile-info { margin-bottom: 12px; }
        .profile-name { font-family: var(--font-display); font-size: 16px; letter-spacing: 0.04em; color: var(--cream); margin-bottom: 4px; }
        .profile-bio { font-size: 13px; color: rgba(245,239,214,0.7); line-height: 1.5; white-space: pre-line; }
        .profile-link { color: var(--royal-light); font-weight: 500; font-size: 13px; display: block; margin-top: 8px; }
        .tab-nav { display: flex; border-bottom: 1px solid rgba(245,239,214,0.1); }
        .tab-item { flex: 1; text-align: center; padding: 14px 0; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,239,214,0.5); cursor: pointer; position: relative; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .tab-item.active { color: var(--cream); }
        .tab-item.active::after { content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%); width: 40px; height: 2px; background: var(--cream); }
        .feed-posts { padding-bottom: 60px; }
        .post { background: var(--cream); margin-bottom: 12px; }
        .post-header { display: flex; align-items: center; padding: 12px 14px; gap: 12px; }
        .post-avatar-text { width: 32px; height: 32px; border-radius: 50%; background: var(--royal); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-size: 12px; color: var(--cream); }
        .post-user { flex: 1; display: flex; flex-direction: column; }
        .post-username { font-size: 13px; font-weight: 600; color: var(--royal); }
        .post-location { font-size: 11px; color: var(--royal); opacity: 0.6; }
        .post-more { color: var(--royal); opacity: 0.6; cursor: pointer; }
        .post-image { width: 100%; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background: var(--royal); cursor: pointer; }
        .post-content { padding: 14px; background: var(--cream); }
        .post-actions { display: flex; gap: 16px; margin-bottom: 10px; }
        .post-action { cursor: pointer; transition: transform 0.15s; color: var(--royal); }
        .post-action:hover { transform: scale(1.1); }
        .post-action.liked { color: #e74c3c; }
        .post-likes { font-size: 13px; font-weight: 600; color: var(--royal); margin-bottom: 6px; }
        .post-caption { font-size: 13px; color: var(--royal); line-height: 1.5; }
        .user-tag { font-weight: 600; }
        .post-view-comments { font-size: 13px; color: var(--royal); opacity: 0.5; display: block; margin-top: 4px; }
        .post-time { font-family: var(--font-mono); font-size: 10px; color: var(--royal); opacity: 0.5; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
      `}</style>
    </div>
  )
}

function PostContent({ type }: { type: string }) {
  const contents: Record<string, React.ReactNode> = {
    calories: <><div className="stat-number-large">650</div><div className="stat-unit">calories / hour</div></>,
    brain: <><span className="health-icon">🧠</span><div className="health-title">BRAIN + BODY</div><p className="health-desc">Cognitive development through sport</p></>,
    community: <><span className="community-badge">🏀 Community</span><div className="community-count">52,400+</div><p className="community-label">members worldwide</p></>,
    mission: <><div className="mission-quote">"SPORT IS THE MISSING PIECE OF THE HEALTH PUZZLE"</div><div className="mission-author">— BASKETBALL AS HEALTH</div></>,
  }
  return <>{contents[type] || contents.calories}</>
}