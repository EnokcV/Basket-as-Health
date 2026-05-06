import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ posts: [], demo: true })
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ error: 'Demo mode' }, { status: 200 })
}