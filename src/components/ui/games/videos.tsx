'use client'
import { useEffect, useState } from 'react'
import { getGameVideos } from '@/lib/database/actions'

const Page = ({ gameId }: { gameId: string }) => {
  const [clips, setClips] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const fetchClips = async () => {
    if (loading) return
    setLoading(true)

    const excludedIds = clips.map((clip) => clip.id)
    console.log(excludedIds)
    const { error, success } = await getGameVideos(excludedIds, gameId)
    if (error) {
      console.error('Error fetching clips:', error)
      return
    }
    console.log(success)

    setClips((prevClips) => [...prevClips, ...success])
    setHasMore(success.length > 0)
    setLoading(false)
  }

  useEffect(() => {
    fetchClips()
  }, [])

  return (
    <div>
      <p>{gameId}</p>
    </div>
  )
}

export default Page
