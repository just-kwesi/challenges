'use client'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getGameVideos } from '@/lib/database/actions'

import { VideoCard } from '@/components/ui/videos/video-card'

import { videosList } from '@/lib/database/types'
import { Icons } from '@/components/icons'

const Page = ({ gameId }: { gameId: string }) => {
  const [videos, setVideos] = useState<videosList[]>([])
  const [hasMore, setHasMore] = useState(true)
  const [offset, setOffset] = useState(10)

  useEffect(() => {
    const fetchInitialVideos = async () => {
      const { success, error } = await getGameVideos(0, gameId)
      if (success) {
        // console.log(success)
        setVideos(success)
      }
    }
    fetchInitialVideos()
  }, [gameId])

  const fetchMoreVideos = async () => {
    const { success, error } = await getGameVideos(offset, gameId)
    if (success) {
      console.log(success)
      setVideos((prevVideos) => [...prevVideos, ...success])
      success.length > 0 ? setHasMore(true) : setHasMore(false)
      setOffset((prevOffset) => (prevOffset += 10))
    }
  }

  return (
    <div className="overflow-y-hidden w-full">
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchMoreVideos}
          hasMore={hasMore}
          loader={<Icons.spinner className="mx-auto h-12 w-12 animate-spin" />}
        >
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"> */}
          <div className="flex flex-wrap w-fit gap-3 justify-center align-center">
            {videos.length > 0 &&
              videos.map((video) => (
                <VideoCard
                  thumbnail={video.url as string}
                  userPage={false}
                  username={video.profiles?.username || ''}
                  title={video.title as string}
                  key={video.id as string}
                  id={video.id as string}
                  avatar={
                    video.profiles?.avatar_url ||
                    `https://ui-avatars.com/api/?name=${
                      video.profiles!.username
                    }&background=random`
                  }
                />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  )
}

export default Page
