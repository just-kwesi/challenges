import Breadcrumbs from '@/components/ui/videos/breadcrumbs'
import { getGameVideos, getGameInfo } from '@/lib/database/actions'
import GameVideos from '@/components/ui/games/videos'

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
                label: `${gameInfo.success.name} Videos`,
                href: `/games/${game}/videos`,
                active: true,
              },
            ]}
          />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
            {gameInfo.success.name} Videos
          </h3>
          <GameVideos gameId={gameInfo.success.id} />
        </>
      )}
    </main>
  )
}
