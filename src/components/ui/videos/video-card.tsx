import Image from 'next/image'
import dynamic from 'next/dynamic'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

// Define the interface for props
interface VideoCardProps {
  thumbnail: string
  // duration: string
  username: string
  title: string
  // timeSubmitted: string
  avatar: string
  id: string
  userPage: boolean
}

// Import VideoPlayer dynamically and disable SSR
const VideoPlayerNoSSR = dynamic(
  () => import('@/components/ui/videos/light-video-player'),
  {
    ssr: false,
  }
)

export function VideoCard({
  thumbnail,
  username,
  title,
  avatar,
  id,
  userPage = false,
}: VideoCardProps) {
  return (
    // <div className="sm:max-w-[350px] min-h-[300px] rounded overflow-hidden shadow-lg sm:min-w-[250px] border w-dvw">
    <div className="sm:max-w-[350px] min-h-auto rounded overflow-hidden shadow-lg sm:min-w-[250px] border w-[300px]">
      <div className="relative w-auto">
        {(userPage && (
          <Link href={`/videos/${id}`} passHref>
            <VideoPlayerNoSSR url={thumbnail} />
          </Link>
        )) || (
          <Link href={`videos/${id}`} passHref>
            <VideoPlayerNoSSR url={thumbnail} />
          </Link>
        )}

        {/* <p className="absolute bottom-2 right-2 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">
          {duration}
        </p> */}
      </div>
      <div className="px-6 py-6">
        <div className="flex items-center space-x-1 gap-2">
          <Link href={`/user/${username}`} passHref>
            <Avatar>
              <AvatarImage
                src={avatar}
                alt={`${username}'s avatar`}
                height={32}
                width={32}
              />
              <AvatarFallback>{`${username}'s avatar`}</AvatarFallback>
            </Avatar>
          </Link>
          <div>
            <p className="text-base">{title}</p>
            <Link href={`/user/${username}`} passHref>
              <p className="text-sm text-muted-foreground">@{username}</p>
            </Link>
          </div>
        </div>

        {/* <div className="flex justify-between items-center text-xs text-muted-foreground mt-6">
          <p>{timeSubmitted}</p>
          <p>{votes} votes</p>
        </div> */}
      </div>
    </div>
  )
}
