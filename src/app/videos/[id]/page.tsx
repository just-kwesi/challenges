import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { AlertCircleIcon } from 'lucide-react'

import Breadcrumbs from '@/components/ui/videos/breadcrumbs'
import { toast } from '@/components/ui/use-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { getVideo, hasVoted } from '@/lib/database/actions'
import { VideoDetails } from '@/components/ui/videos/video-details'
import { Vote } from '@/components/ui/videos/vote-component'

export const metadata: Metadata = {
  title: 'Game Clip | Klipped',
  description: 'Watch, and vote on this clip on Klipped.',
}

const VideoPlayerNoSSR = dynamic(
  () => import('@/components/ui/video-player/video-player'),
  {
    ssr: false,
  }
)

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const id = params.id
  // console.log(searchParams)
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
      {(searchParams?.charts && (
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Home', href: '/' },
            // { label: 'Charts', href: `` },
            {
              label: 'Video',
              href: `/videos/${id}/`,
              active: true,
            },
          ]}
        />
      )) || (
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
      )}

      {success && (
        <div>
          <div className="w-full h-100svh">
            <VideoPlayerNoSSR url={success[0].url} />
          </div>
          <VideoDetails
            title={success[0].title}
            description={success[0].description as string}
            category={success[0].categories?.name as string}
            avatar_url={
              (success[0].profiles!.avatar_url as string) ||
              `https://ui-avatars.com/api/?name=${
                success[0].profiles!.username
              }&background=random`
            }
            username={success[0].profiles!.username as string}
          />
          <div className="px-4 space-y-2">
            <Vote voted={voted} videoId={id} />
            <Alert>
              <AlertCircleIcon className="h-5 w-5" />
              <AlertTitle>Take Note!</AlertTitle>
              <AlertDescription>
                You need to log in to vote. Your vote counts towards the
                leaderboard rankings!
              </AlertDescription>
            </Alert>
          </div>
        </div>
      )}
    </main>
  )
}
