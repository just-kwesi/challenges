import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/ui/videos/breadcrumbs'
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
  console.log(game)
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

      <div className="w-full h-100svh">
        <VideoPlayerNoSSR url={'https://youtu.be/oDk2syM7ndM'} />
      </div>
      <VideoDetails title={'test'} views={'test'} uploadDate={'test'} />
    </main>
  )
}
const VideoDetails = ({
  title,
  views,
  uploadDate,
}: {
  title: string
  views: string
  uploadDate: string
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex justify-between items-center my-2">
        <span className="text-gray-600">
          {views} views • {uploadDate}
        </span>
        {/* Action buttons here */}
      </div>
      {/* Video description and channel details */}
    </div>
  )
}
