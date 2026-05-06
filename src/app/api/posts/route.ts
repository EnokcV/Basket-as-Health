import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*, profiles(username, avatar_url, full_name)')
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) throw error

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { caption, image_url, location } = body

    const { data, error } = await supabase
      .from('posts')
      .insert({
        user_id: body.user_id,
        caption,
        image_url,
        location,
      })
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ post: data })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}