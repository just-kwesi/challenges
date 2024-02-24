'use client'

import * as React from 'react'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center gap-3 ml-5"
          onOpenChange={setOpen}
        >
          {/* <Image src={logo} width={24} height={24} alt="logo" /> */}
          <span className="font-bold">kwesi</span>
        </MobileLink>

        <nav className="flex items-start gap-8 text-sm flex-col mt-10 ml-5">
          <Link
            href="/"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/' ? 'text-foreground' : 'text-foreground/60'
            )}
            onClick={() => {
              setOpen?.(false)
            }}
          >
            Home
          </Link>

          <Link
            href="/projects"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname.startsWith('/projects')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
            onClick={() => {
              setOpen?.(false)
            }}
          >
            Projects
          </Link>

          <Link
            href="/work"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname.startsWith('/work')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
            onClick={() => {
              setOpen?.(false)
            }}
          >
            Experience
          </Link>

          <Link
            href="/contact"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname.startsWith('/contact-me')
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
            onClick={() => {
              setOpen?.(false)
            }}
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
