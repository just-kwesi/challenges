import { SidebarDoc } from '@/lib/config/docs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DocsSidebarNav } from '@/components/ui/layout/sidebar-nav'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Clips | Klipped',
  description:
    'Discover and vote on the best game clips from Apex Legends, Overwatch, Call of Duty, and more. Join Klipped today to start sharing your own highlights!',
}

export default async function GamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-3 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-2">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={SidebarDoc} />
          </ScrollArea>
        </aside>
        <div>{children}</div>
      </div>
    </main>
  )
}
