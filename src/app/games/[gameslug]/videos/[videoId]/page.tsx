import dynamic from 'next/dynamic'

import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

import { getVideo, hasVoted } from '@/lib/database/actions'

import { VideoDetails } from '@/components/ui/videos/video-details'
import { Vote } from '@/components/ui/videos/vote-component'
import { toast } from '@/components/ui/use-toast'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Clip | Klipped',
  description: 'Watch, and vote on this clip on Klipped.',
}

// Import VideoPlayer dynamically and disable SSR
const VideoPlayerNoSSR = dynamic(
  () => import('@/components/ui/video-player/video-player'),
  {
    ssr: false,
  }
)

export default async function Page({
  params,
}: {
  params: { gameslug: string; videoId: string }
}) {
  const game = params.gameslug
  const videoId = params.videoId

  const { success, error } = await getVideo(videoId)

  const voted = await hasVoted(videoId)
  if (error) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    })
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: `${game}`,
            href: `/games/${game}/videos`,
          },
          {
            label: `Video`,
            href: `/games/${game}/videos/${videoId}`,
            active: true,
          },
        ]}
      />
      {success && (
        <div>
          <div className="w-full h-100svh min-h-80">
            <VideoPlayerNoSSR url={success[0].url} />
          </div>
          <VideoDetails
            title={success[0].title}
            description={success[0].description as string}
            avatar_url={
              (success[0].profiles!.avatar_url as string) ||
              `https://ui-avatars.com/api/?name=${
                success[0].profiles!.username
              }&background=random`
            }
            username={success[0].profiles!.username as string}
            category={success[0].categories?.name as string}
          />
          <Vote voted={voted} videoId={videoId} />
        </div>
      )}
    </main>
  )
}
