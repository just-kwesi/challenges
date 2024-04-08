'use client'
import { getGameVideos } from '@/lib/database/actions'

export default function page({ gameId }: { gameId: string }) {
  return (
    <div>
      <p>{gameId}</p>
    </div>
  )
}
