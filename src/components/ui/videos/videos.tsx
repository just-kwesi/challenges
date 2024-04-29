import { VideoCard } from '@/components/ui/videos/video-card'
import { getUserVideosWithId } from '@/lib/database/actions'

export default async function Videos({ userId }: { userId: string }) {
  const { success, error } = await getUserVideosWithId(userId)
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {success &&
          success.map((video, index) => {
            return (
              <VideoCard
                thumbnail={video.url}
                username={video.profiles!.username as string}
                title={video.title}
                avatar={
                  (video.profiles!.avatar_url as string) ||
                  `https://ui-avatars.com/api/?name=${
                    video.profiles!.username
                  }&background=random`
                }
                // views={sampleVideo.views}
                key={index}
                id={video.id}
                userPage={true}
              />
            )
          })}
      </div>
    </main>
  )
}
