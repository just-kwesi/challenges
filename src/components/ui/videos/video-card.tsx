import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

// Define the interface for props
interface VideoCardProps {
  thumbnail: string
  duration: string
  username: string
  title: string
  timeSubmitted: string
  avatar: string
  views: string
}

export function VideoCard({
  thumbnail,
  duration,
  username,
  title,
  timeSubmitted,
  avatar,
  views,
}: VideoCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative">
        <Image
          className="w-full"
          src={thumbnail}
          alt={`${title} Video thumbnail`}
          height={128}
          width={128}
        />
        <p className="absolute bottom-2 right-2 rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {duration}
        </p>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2 mb-2">
          <Image
            className="w-8 h-8 rounded-full"
            src={avatar}
            alt={`${username}'s avatar`}
            height={32}
            width={32}
          />
          <p className="text-xl text-muted-foreground">{username}</p>
        </div>

        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-2">
          {title}
        </h4>

        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <p>{timeSubmitted}</p>
          <p>{views} votes</p>
        </div>
      </div>
    </div>
  )
}
