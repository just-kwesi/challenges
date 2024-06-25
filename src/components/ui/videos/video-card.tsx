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
    <div className="w-full col-span-1 max-w-[350px] mx-auto border h-[230px] flex flex-col rounded-lg shadow-lg transition-transform transform hover:scale-105 justify-center">
      <div className="relative w-full h-[200px] rounded-t-lg overflow-hidden">
        {userPage ? (
          <Link href={`/videos/${id}`} passHref>
            <VideoPlayerNoSSR url={thumbnail} />
          </Link>
        ) : (
          <Link href={`videos/${id}`} passHref>
            <VideoPlayerNoSSR url={thumbnail} />
          </Link>
        )}
      </div>
      <div className="px-4 py-2 pb-4 flex-1">
        <div className="flex items-end space-x-2">
          <Link href={`/user/${username}`} passHref>
            <Avatar>
              <AvatarImage
                src={avatar}
                alt={`${username}'s avatar`}
                height={32}
                width={32}
                className="rounded-full"
              />
              <AvatarFallback>{`${username[0]}`}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold truncate">{title}</p>
            <Link href={`/user/${username}`} passHref>
              <p className="text-sm text-gray-500 truncate">@{username}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
