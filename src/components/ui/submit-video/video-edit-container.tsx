'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { SubmissionForm } from '@/components/ui/submit-video/edit-video-form'
import { EditVideoType } from '@/lib/database/types'

// Import VideoPlayer dynamically and disable SSR
const VideoPlayerNoSSR = dynamic(
  () => import('@/components/ui/video-player/video-player'),
  {
    ssr: false,
  }
)

const VideoPlayerContainer = ({
  res,
  videoData,
  videoId,
}: {
  res: any
  videoData: EditVideoType
  videoId: string
}) => {
  const [videoUrl, setVideoUrl] = useState('')

  const handleVideoUrlChange = (url: string) => {
    setVideoUrl(url)
  }
  useEffect(() => {
    handleVideoUrlChange(videoData.url)
  }, [videoData.url])

  return (
    <div className="flex flex-col gap-x-7 md:flex-row">
      <div className="basis-9/12">
        <p className="mb-2 text-base font-medium">Video Player</p>
        <div className="aspect-video min-w-[250px] h-auto">
          <VideoPlayerNoSSR url={videoUrl} />
        </div>
      </div>
      <SubmissionForm
        data={res}
        onVideoUrlChange={handleVideoUrlChange}
        videoDetails={videoData}
        videoId={videoId}
      />
    </div>
  )
}
export default VideoPlayerContainer
