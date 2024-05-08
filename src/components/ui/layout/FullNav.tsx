'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Icons } from '@/components/icons'

export function FullNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-10 flex items-center space-x-2">
        <Icons.logo className="w-20 h-20" />
      </Link>
    </div>
  )
}
