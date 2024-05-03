import { Metadata } from 'next'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Videos from '@/components/ui/videos/videos'
import { Separator } from '@/components/ui/separator'
import { getUserDetails } from '@/lib/database/actions'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'User Gaming Profile on Klipped',
  description:
    "Explore User's top game clips, recent uploads, and leaderboard ranks on Klipped. Join the community to like, comment, and share!",
}

export default async function UserProfile({
  params,
}: {
  params: { username: string }
}) {
  const usrname = params.username

  if (!usrname) {
    redirect('/settings/profile')
  }

  const { username, full_name, bio, avatar_url, id } = await getUserDetails(
    usrname
  )
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
        <div className="space-y-2 sm:text-left text-center divide-y">
          <div className="my-2 space-y-1">
            <h4 className="scroll-m-20 text-xl font-normal tracking-tight">
              {full_name}
            </h4>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              @{username}
            </code>
          </div>
          <p className="text-sm text-muted-foreground">{bio}</p>
        </div>
      </div>
      <div className="space-y-0.5 mt-5 text-center">
        <h2 className="text-2xl font-normal tracking-tight">Videos</h2>
      </div>
      <Separator className="my-6" />
      <Videos userId={id} />
    </main>
  )
}
