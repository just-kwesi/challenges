import Image from 'next/image'
import Link from 'next/link'
export const VideoDetails = ({
  title,
  description,
  uploadDate,
  username,
  avatar_url,
}: {
  title: string
  description: string
  uploadDate: string
  username: string
  avatar_url: string
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Link href={`/user/${username}`}>
          <Image
            className="w-7 h-7 rounded-full"
            src={avatar_url}
            alt={`${username}'s avatar`}
            height={32}
            width={32}
          />
        </Link>
        <Link href={`/user/${username}`}>
          {' '}
          <p className="text-base text-muted-foreground">{username}</p>
        </Link>
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex justify-between items-center my-2">
        <span className="text-gray-600">{description}</span>
        {/* Action buttons here */}
      </div>
      {/* Video description and channel details */}
    </div>
  )
}
