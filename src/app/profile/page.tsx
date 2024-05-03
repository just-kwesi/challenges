import { Metadata } from 'next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Videos from '@/components/ui/videos/videos'
import { Separator } from '@/components/ui/separator'
import { getSignedInUserProfile } from '@/lib/database/actions'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'User Profile | Customize Your Klipped Experience',
  description:
    'View and manage your uploaded game clips and account settings at Klipped. Enhance your profile to connect with other gamers!',
}

export default async function UserProfile() {
  const {
    username,
    full_name,
    bio,
    avatar_url,
    id,
    x_url,
    twitch_url,
    youtube_url,
  } = await getSignedInUserProfile()
  if (!username) {
    redirect('/settings/profile')
  }
  const avartarURL =
    avatar_url ||
    `https://ui-avatars.com/api/?name=${username}&background=random`

  return (
    <main>
      <div className="flex flex-col justify-between max-w-lg sm:flex-row mt-8 gap-9 mx-auto">
        <Avatar className="h-40 w-40  max-h-48 max-w-48 mx-auto">
          <AvatarImage src={avartarURL} alt="user avartar" />
          <AvatarFallback>EX</AvatarFallback>
        </Avatar>
        <div className="space-y-2 sm:text-left text-center">
          <div className="my-2 space-y-1">
            <h4 className="scroll-m-20 text-xl font-normal tracking-tight">
              {full_name}
            </h4>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @{username}
            </code>
            <nav className="flex items-center justify-center sm:justify-start gap-2">
              {twitch_url && (
                <Link href={twitch_url} target="_blank" rel="noreferrer">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                      }),
                      'w-9 px-0'
                    )}
                  >
                    <Icons.twitch className="h-4 w-4 fill-current" />
                    <span className="sr-only">Twitch</span>
                  </div>
                </Link>
              )}

              {youtube_url && (
                <Link href={youtube_url} target="_blank" rel="noreferrer">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                      }),
                      'w-9 px-0'
                    )}
                  >
                    <Icons.youtube className="h-4 w-4 fill-current" />
                    <span className="sr-only">Youtube</span>
                  </div>
                </Link>
              )}

              {x_url && (
                <Link href={x_url} target="_blank" rel="noreferrer">
                  <div
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                      }),
                      'w-9 px-0'
                    )}
                  >
                    <Icons.x className="h-4 w-4 fill-current" />
                    <span className="sr-only">X</span>
                  </div>
                </Link>
              )}
            </nav>
          </div>
          <p className="text-sm text-muted-foreground">{bio}</p>
        </div>
      </div>
      <div className="space-y-0.5 mt-6 text-center">
        <h2 className="text-2xl font-normal tracking-tight">Videos</h2>
      </div>
      <Separator className="my-4" />
      <Videos userId={id} />
    </main>
  )
}
