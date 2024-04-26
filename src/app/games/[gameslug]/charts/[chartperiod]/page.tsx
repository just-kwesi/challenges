import dynamic from 'next/dynamic'

import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

import { getVideoChart } from '@/lib/database/actions'

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
  let { error, success } = await getVideoChart(game, chartperiod)
  if (success) {
    success = success.map((video, index) => {
      if (index % 2 == 0) {
        video.video_category = 'Clutch Moment'
      }
      return {
        ...video,
        rank: index + 1,
        category: video.video_category,
      }
    })
  }

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
          <Link href={`daily`}>Daily</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`weekly`}>Weekly</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`monthly`}>Monthly</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href={`alltime`}>All Time</Link>
        </Button>
      </div>
      <Separator />
      {success && <DataTable columns={columns} data={success!} />}
    </main>
  )
}
