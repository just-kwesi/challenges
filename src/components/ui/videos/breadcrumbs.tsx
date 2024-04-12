import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  /**
   * Renders a collapsed breadcrumb component.
   *
   * @param {Object} props - The component props.
   * @param {Breadcrumb[]} props.breadcrumbs - The array of breadcrumb objects.
   * @returns {JSX.Element} - The rendered collapsed breadcrumb component.
   */
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import React from 'react'

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

export default function BreadcrumbCollapsed({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[]
}) {
  return (
    <Breadcrumb
      aria-label="Breadcrumb"
      className="mb-3 mt-3 flex items-center flex-wrap"
    >
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.href}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 ? <BreadcrumbSeparator /> : null}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
