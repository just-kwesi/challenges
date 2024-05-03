import Breadcrumbs from '@/components/ui/videos/breadcrumbs'
import { getGameVideos, getGameInfo } from '@/lib/database/actions'
import GameVideos from '@/components/ui/games/videos'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Clip Leaderboard | Klipped',
  description:
    "Check out today's top voted game clips from Apex Legends, Overwatch, and more on Klipped. Vote for your favorites and help them climb the daily ranks!",
}

export default async function Page({
  params,
}: {
  params: { gameslug: string }
}) {
  const game = params.gameslug
  const gameInfo = await getGameInfo(game)
  return (
    <main>
      {gameInfo.success && (
        <>
          <Breadcrumbs
            breadcrumbs={[
              { label: 'Home', href: '/' },
              {
                label: `${gameInfo.success.name} Charts`,
                href: `/games/${game}/charts`,
                active: true,
              },
            ]}
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-1">
            {gameInfo.success.name} Charts
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
        </>
      )}
    </main>
  )
}
