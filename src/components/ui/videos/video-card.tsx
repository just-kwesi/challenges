import Image from 'next/image'
import dynamic from 'next/dynamic'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Define the interface for props
interface VideoCardProps {
  thumbnail: string
  // duration: string
  username: string
  title: string
  // timeSubmitted: string
  avatar: string
  id: string
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
}: VideoCardProps) {
  return (
    <div className="max-w-[275px] min-h-[300px] rounded overflow-hidden shadow-lg min-w-[220px] border">
      <div className="relative">
        <Link href={`/videos/${id}`} passHref>
          <VideoPlayerNoSSR url={thumbnail} />
        </Link>

        {/* <p className="absolute bottom-2 right-2 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">
          {duration}
        </p> */}
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2 mb-2">
          <Image
            className="w-7 h-7 rounded-full"
            src={avatar}
            alt={`${username}'s avatar`}
            height={32}
            width={32}
          />
          <p className="text-base text-muted-foreground">{username}</p>
        </div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">{title}</p>

        {/* <div className="flex justify-between items-center text-xs text-muted-foreground mt-6">
          <p>{timeSubmitted}</p>
          <p>{votes} votes</p>
        </div> */}
      </div>
    </div>
  )
}
