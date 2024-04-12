import dynamic from 'next/dynamic'

import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

import { getVideo } from '@/lib/database/actions'

import { VideoDetails } from '@/components/ui/videos/video-details'
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
          <div className="w-full h-100svh">
            <VideoPlayerNoSSR url={success[0].url} />
          </div>
          <VideoDetails
            title={success[0].title}
            description={success[0].description as string}
            uploadDate={'test'}
            avatar_url={
              (success[0].profiles!.avatar_url as string) ||
              `https://ui-avatars.com/api/?name=${
                success[0].profiles!.username
              }&background=random`
            }
            username={success[0].profiles!.username as string}
          />
        </div>
      )}
    </main>
  )
}
