'use client'
import { useEffect, useState, useRef } from 'react'
import { debounce } from 'lodash'
import { motion } from 'framer-motion'
import { getGameVideos } from '@/lib/database/actions'

import { VideoCard } from '@/components/ui/videos/video-card'

import { videosList } from '@/lib/database/types'
import { Icons } from '@/components/icons'

const Videos = ({ gameId }: { gameId: string }) => {
  const PAGE_COUNT = 15
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [videos, setVideos] = useState<videosList[]>([])
  const [offset, setOffset] = useState(1)
  const [isInView, setIsInView] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLast, setIsLast] = useState(false)

  const handleScroll = () => {
    if (containerRef.current && typeof window !== 'undefined') {
      const container = containerRef.current
      const { bottom } = container.getBoundingClientRect()
      const { innerHeight } = window
      setIsInView(bottom <= innerHeight)
    }
  }

  useEffect(() => {
    const handleDebouncedScroll = debounce(() => !isLast && handleScroll(), 200)
    window.addEventListener('scroll', handleDebouncedScroll)
    return () => {
      window.removeEventListener('scroll', handleDebouncedScroll)
    }
  }, [isLast])

  useEffect(() => {
    if (isInView && !isLoading) {
      loadMoreVideos(offset)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  const loadMoreVideos = async (offset: number) => {
    setIsLoading(true)
    try {
      // Every time we fetch, we want to increase
      // the offset to load fresh tickets
      setOffset((prev) => prev + 1)
      const { success: newVideos, error } = await getGameVideos(offset, gameId)
      if (newVideos) {
        // Merge new videos with all previously loaded
        setVideos((prevVideos) => [...prevVideos, ...newVideos])
        setIsLoading(false)
        if (newVideos.length < PAGE_COUNT) {
          setIsLast(true)
        }
      }
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

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

  return (
    <>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-10"
      >
        {videos.map((video, i) => {
          const recalculatedDelay =
            i >= PAGE_COUNT * 2 ? (i - PAGE_COUNT * (offset - 1)) / 15 : i / 15

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.25, 0, 1],
                delay: recalculatedDelay,
              }}
              className="col-span-1"
            >
              <VideoCard
                thumbnail={video.url as string}
                userPage={false}
                username={video.profiles?.username || ''}
                title={video.title as string}
                id={video.id as string}
                avatar={
                  video.profiles?.avatar_url ||
                  `https://ui-avatars.com/api/?name=${
                    video.profiles!.username
                  }&background=random`
                }
              />
            </motion.div>
          )
        })}
      </div>
      {isLoading && (
        <div className="flex justify-center my-4">
          <Icons.spinner className="h-10 w-10 animate-spin" />
        </div>
      )}
    </>
  )
}

export default Videos
