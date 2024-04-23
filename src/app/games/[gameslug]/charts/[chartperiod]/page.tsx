import dynamic from 'next/dynamic'

import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

import { getVideo, hasVoted } from '@/lib/database/actions'

import { VideoDetails } from '@/components/ui/videos/video-details'
import { Vote } from '@/components/ui/videos/vote-component'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/charts/charts-table'
import { columns } from './columns'
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
  params: { gameslug: string; chartperiod: string }
}) {
  const game = params.gameslug
  const chartperiod = params.chartperiod
  const success = [
    {
      game: 'Apex',
      title: 'APEX LEGENDS',
      category: 'BEST VIDEO',
      status: true,
    },
  ]
  //   const { success, error } = await getVideo(videoId)

  // //   const voted = await hasVoted(videoId)
  //   if (error) {
  //     toast({
  //       variant: 'destructive',
  //       title: 'Uh oh! Something went wrong.',
  //       description: 'There was a problem with your request.',
  //     })
  //   }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: `${game}`,
            href: `/games/${game}/charts`,
          },
          {
            label: `${chartperiod} charts`,
            href: `/games/${game}/charts/${chartperiod}`,
            active: true,
          },
        ]}
      />
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">
        Charts
      </h3>
      <div className="flex justify-start gap-2">
        <Button variant="link" asChild className="-px-4">
          <Link href={`charts/daily`}>Daily</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`charts/weekly`}>Weekly</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`charts/monthly`}>Monthly</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`charts/alltime`}>All Time</Link>
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={success!} />
    </main>
  )
}
