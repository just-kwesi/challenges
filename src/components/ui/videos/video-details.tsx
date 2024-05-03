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
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-2 space-y-3">
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
      <h1 className="text-lg font-bold">
        {' '}
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mr-4">
          Title
        </span>
        {title}{' '}
      </h1>
      <div>
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mr-4">
          Category
        </span>
        <Badge className="my-3">{category}</Badge>
      </div>

      <div>
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mr-4">
          Description
        </span>
        <span className="leading-7 [&:not(:first-child)]:mt-6">
          {description}
        </span>
        {/* Action buttons here */}
      </div>
      {/* Video description and channel details */}
    </div>
  )
}
