import Link from 'next/link'
import { FullNav } from '@/components/ui/layout/FullNav'
import { MobileNav } from '@/components/ui/layout/MobileNav'
import { ModeToggle } from '@/components/ui/layout/ModeToggle'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-14 max-w-screen-2xl">
        <FullNav />
        <MobileNav />
        <div className="flex justify-end gap-2">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/login">Signup</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
