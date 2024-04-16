import dynamic from 'next/dynamic'
import Breadcrumbs from '@/components/ui/videos/breadcrumbs'
import { getVideo, hasVoted } from '@/lib/database/actions'
import { VideoDetails } from '@/components/ui/videos/video-details'
import { Vote } from '@/components/ui/videos/vote-component'
import { toast } from '@/components/ui/use-toast'
const VideoPlayerNoSSR = dynamic(
  () => import('@/components/ui/video-player/video-player'),
  {
    ssr: false,
  }
)

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const { success, error } = await getVideo(id)
  const voted = await hasVoted(id)
  if (error) {
    toast({
      variant: 'destructive',
      title: 'Uh oh! Something went wrong.',
      description: 'There was a problem with your request.',
    })
  }

  return (
    <main className="mx-5">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'User Videos', href: '/videos' },
          {
            label: 'Video',
            href: `/videos/${id}/`,
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
          <Vote voted={voted} videoId={id} />
        </div>
      )}
    </main>
  )
}
