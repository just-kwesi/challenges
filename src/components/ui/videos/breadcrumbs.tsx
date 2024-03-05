import { cn } from '@/lib/utils'
import { ChevronRight, HomeIcon } from 'lucide-react'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[]
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-3 mt-3 flex items-center flex-wrap pl-8"
    >
      <ol
        className={cn('flex scroll-m-20 text-xl font-semibold tracking-tight')}
      >
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? 'text-foreground/60' : 'text-foreground',
              'transition-colors hover:text-foreground/80'
            )}
          >
            <Link href={breadcrumb.href}>
              {breadcrumb.label == 'Home' ? (
                <HomeIcon className="h-5 w-5 inline-block" />
              ) : (
                breadcrumb.label
              )}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <ChevronRight className="h-5 w-5 mx-3 inline-block" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
