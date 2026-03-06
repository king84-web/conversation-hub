import { NextRequest, NextResponse } from 'next/server'
import { isUsingMemory } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const usingMemory = isUsingMemory()
    return NextResponse.json({ usingMemory })
  } catch (error) {
    console.error('dbstatus error:', error)
    return NextResponse.json({ usingMemory: true })
  }
}
