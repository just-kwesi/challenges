import { getGameDetails } from '@/lib/database/actions'
import { SidebarDoc } from '@/lib/config/docs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocsSidebarNav } from '@/components/ui/layout/sidebar-nav'
import { GameCard } from '@/components/ui/homepage/game-card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'

export default async function Home() {
  const { success, error } = await getGameDetails()
  return (
    <main className="">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-3 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={SidebarDoc} />
          </ScrollArea>
        </aside>
        <div className="flex justify-center flex-col">
          <Alert className="my-5 w-full">
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Create an Account to Submit Videos</AlertTitle>
            <AlertDescription>
              Please sign up to submit your videos. We greatly appreciate each
              video you contribute!
            </AlertDescription>
          </Alert>
          <div className="space-y-0.5 mt-4 text-center">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
              Games
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 flex-wrap items-center justify-center">
            {success &&
              success?.map((game, index) => {
                return (
                  <GameCard
                    key={index}
                    imageUrl={game.image_url}
                    title={game.games!.name}
                    description={game.games!.description || 'Description'}
                    href={game.games!.slug || '/'}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </main>
  )
}
