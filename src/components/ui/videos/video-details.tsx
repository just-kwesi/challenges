import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export const VideoDetails = ({
  title,
  description,
  category,
  username,
  avatar_url,
}: {
  title: string
  description: string
  category: string
  username: string
  avatar_url: string
}) => {
  return (
    <div className="p-4 grid grid-cols-3 md:grid-cols-4 gap-3">
      <div className="flex items-center  space-x-2 mb-2 space-y-3 col-span-3 md:col-span-4">
        <Link href={`/user/${username}`}>
          <Image
            className="w-8 h-8 rounded-full bg-current"
            src={avatar_url}
            alt={`${username}'s avatar`}
            height={32}
            width={32}
            unoptimized
          />
        </Link>
        <Link href={`/user/${username}`}>
          <p className="text-lg text-muted-foreground">{username}</p>
        </Link>
      </div>

      <div className="col-span-4 grid grid-cols-3 md:grid-cols-5">
        <div>
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mr-4">
            Title
          </span>
        </div>
        <div className="col-span-2 md:col-span-4">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
      </div>

      <div className="col-span-4 grid grid-cols-3 md:grid-cols-5">
        <div className="col-span-1">
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mr-4">
            Category
          </span>
        </div>
        <div className="col-span-2 md:col-span-4">
          <Badge>{category}</Badge>
        </div>
      </div>

      <div className="col-span-4 grid grid-cols-3 md:grid-cols-5">
        <div className="col-span-1">
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Description
          </span>
        </div>

        <div className="col-span-2 md:col-span-4">
          <span className="text-muted-foreground text-sm">{description}</span>
        </div>

        {/* Action buttons here */}
      </div>
      {/* Video description and channel details */}
    </div>
  )
}
