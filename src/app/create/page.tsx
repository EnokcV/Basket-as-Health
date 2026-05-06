'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CreatePost() {
  const router = useRouter()
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ caption, image }),
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error('Error creating post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="create-page">
      <header className="create-header">
        <Link href="/" className="back-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="create-title">Create Post</h1>
        <button
          type="submit"
          form="post-form"
          className="share-btn"
          disabled={isLoading || (!image && !caption)}
        >
          {isLoading ? 'Sharing...' : 'Share'}
        </button>
      </header>

      <form id="post-form" onSubmit={handleSubmit} className="create-form">
        {!image ? (
          <div className="upload-area" onClick={() => document.getElementById('file-input')?.click()}>
            <div className="upload-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <p className="upload-text">Select from computer</p>
            <p className="upload-hint">or drag and drop</p>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        ) : (
          <div className="preview-area">
            <img src={image} alt="Preview" className="preview-image" />
            <button
              type="button"
              onClick={() => setImage(null)}
              className="remove-image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="caption-area">
          <div className="user-info">
            <div className="user-avatar">BH</div>
            <span className="user-name">basketballashealth</span>
          </div>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a caption..."
            className="caption-input"
            rows={4}
          />
          <div className="caption-options">
            <button type="button" className="option-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </button>
            <button type="button" className="option-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 9-9 9s-9-2-9-9" />
                <path d="M1 10c0 7-9 9-9 9s-9-2-9-9" />
                <path d="M1 10c0 7 9 9 9 9s9-2 9 9" />
              </svg>
            </button>
            <button type="button" className="option-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <style jsx>{`
        .create-page {
          min-height: 100vh;
          background: var(--night);
        }

        .create-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(245, 239, 214, 0.08);
        }

        .back-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .back-btn:hover {
          background: rgba(245, 239, 214, 0.1);
        }

        .back-btn svg {
          stroke: var(--cream);
        }

        .create-title {
          font-family: var(--font-display);
          font-size: 18px;
          letter-spacing: 0.04em;
          color: var(--cream);
        }

        .share-btn {
          background: var(--royal);
          color: var(--cream);
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s;
        }

        .share-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .share-btn:not(:disabled):hover {
          background: var(--royal-light);
        }

        .create-form {
          padding: 16px;
        }

        .upload-area {
          background: rgba(245, 239, 214, 0.03);
          border: 2px dashed rgba(245, 239, 214, 0.2);
          border-radius: 12px;
          padding: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .upload-area:hover {
          border-color: var(--royal-light);
        }

        .upload-icon {
          opacity: 0.6;
          margin-bottom: 16px;
        }

        .upload-icon svg {
          stroke: var(--cream);
        }

        .upload-text {
          font-size: 16px;
          font-weight: 500;
          color: var(--cream);
          margin-bottom: 8px;
        }

        .upload-hint {
          font-size: 13px;
          color: rgba(245, 239, 214, 0.5);
        }

        .preview-area {
          position: relative;
          margin-bottom: 16px;
        }

        .preview-image {
          width: 100%;
          border-radius: 8px;
        }

        .remove-image {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .remove-image svg {
          stroke: white;
        }

        .caption-area {
          background: rgba(245, 239, 214, 0.03);
          border-radius: 12px;
          padding: 16px;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--royal);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 12px;
          color: var(--cream);
        }

        .user-name {
          font-size: 14px;
          font-weight: 500;
          color: var(--cream);
        }

        .caption-input {
          width: 100%;
          background: transparent;
          color: var(--cream);
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          border: none;
          outline: none;
        }

        .caption-input::placeholder {
          color: rgba(245, 239, 214, 0.4);
        }

        .caption-options {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(245, 239, 214, 0.1);
        }

        .option-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(245, 239, 214, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .option-btn:hover {
          border-color: var(--cream);
          background: rgba(245, 239, 214, 0.1);
        }

        .option-btn svg {
          stroke: var(--cream);
        }
      `}</style>
    </div>
  )
}