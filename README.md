# Basketball as Health - Instagram Clone

A full-stack Instagram clone for Basketball as Health, built with Next.js 14 and Supabase.

## 🌐 Live Demo

Visit: [basketballashealth.netlify.app](https://basketballashealth.netlify.app)

## 🚀 Features

- **Interactive Feed** - Like, save, and comment on posts
- **Stories** - Circular avatars with stories
- **Profile Page** - Edit profile, view posts grid
- **Create Post** - Upload images with captions
- **Search** - Find users and trending hashtags
- **Responsive Design** - Mobile-first approach

## 🎨 Brand Identity

- **Colors**: Royal Blue (#1E3A8A), Cream (#F5EFD6), Forest Green (#2D6A4F)
- **Fonts**: Bebas Neue, DM Sans, DM Mono

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, CSS Modules
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/EnokcV/Basket-as-Health.git
cd Basket-as-Health/basket-as-health

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

## 🗄️ Database Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `src/lib/supabase.ts` in the SQL Editor
3. Copy your URL and Anon Key to `.env.local`

## 📱 Pages

- `/` - Home feed
- `/profile` - User profile
- `/create` - Create new post
- `/search` - Search users & tags
- `/reels` - Reels tab

## 📄 License

MIT License - See LICENSE file