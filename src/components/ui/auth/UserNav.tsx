'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { redirect, usePathname } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { userProfileData } from '@/lib/types/auth'
import { Tables } from '@/lib/database/supabase.types'

export function UserNav({
  signout,
  userProfile,
}: {
  signout: () => Promise<void>
  userProfile: Tables<'profiles'> | undefined
}) {
  const pathname = usePathname()
  const username = userProfile ? userProfile.username : 'example_username'
  const fullName = userProfile ? userProfile.full_name : 'Example Name'
  const avartarURL = `https://ui-avatars.com/api/?name=${username}&background=random`

  if (!username) {
    redirect('/settings/profile')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avartarURL} alt="user avartar" />
            <AvatarFallback>EX</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {fullName}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/profile"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/profile'
                  ? 'text-foreground/60'
                  : 'text-foreground'
              )}
            >
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {' '}
            <Link
              href="/videos"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/videos'
                  ? 'text-foreground/60'
                  : 'text-foreground'
              )}
            >
              Videos
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              href="/settings/profile"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/settings/profile'
                  ? 'text-foreground/60'
                  : 'text-foreground'
              )}
            >
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action={signout}>
            <button>Logout</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
