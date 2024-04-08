import { cn } from '@/lib/utils'
import { ChevronRight, HomeIcon } from 'lucide-react'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-3 mt-3 flex items-center flex-wrap pl-8"
    >
      <ol className={cn('flex scroll-m-20 text-base font-medium space-x-1')}>
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
              <ChevronRight className="h-5 w-5 inline-block" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function BreadcrumbCollapsed({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[]
}) {
  return (
    <Breadcrumb
      aria-label="Breadcrumb"
      className="mb-3 mt-3 flex items-center flex-wrap pl-8"
    >
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem key={breadcrumb.href}>
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function BreadcrumbWithCustomSeparator() {
  return (
    <Breadcrumb
      aria-label="Breadcrumb"
      className="mb-3 mt-3 flex items-center flex-wrap pl-8"
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/components">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
