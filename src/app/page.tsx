import { getGameDetails } from '@/lib/database/actions'
import { SidebarDoc } from '@/lib/config/docs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocsSidebarNav } from '@/components/ui/layout/sidebar-nav'
import { GameCard } from '@/components/ui/homepage/game-card'

export default async function Home() {
  const { success, error } = await getGameDetails()
  return (
    <main className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-3 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={SidebarDoc} />
          </ScrollArea>
        </aside>
        <div className="flex flex-col sm:flex-row gap-10 flex-wrap items-center justify-center">
          {success &&
            success?.map((game, index) => {
              return (
                <GameCard
                  key={index}
                  imageUrl={game.image_url}
                  title={game.games!.name}
                  description={game.games!.description || 'Description'}
                  href="/"
                />
              )
            })}
        </div>
      </div>
    </main>
  )
}
