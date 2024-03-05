import Image from 'next/image'
import { VideoCard } from '@/components/ui/videos/video-card'

// Sample video data
const videos = [
  {
    thumbnail: 'https://via.placeholder.com/210x118',
    duration: '10:15',
    username: 'SampleUser',
    title: 'How to Use Tailwind CSS with React',
    timeSubmitted: '2 hours ago',
    avatar: 'https://ui-avatars.com/api/?name=${username}&background=random',
    views: '1.2K',
  },
]

export default async function Videos() {
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {videos.map((sampleVideo, index) => {
          return (
            <VideoCard
              thumbnail={sampleVideo.thumbnail}
              duration={sampleVideo.duration}
              username={sampleVideo.username}
              title={sampleVideo.title}
              timeSubmitted={sampleVideo.timeSubmitted}
              avatar={sampleVideo.avatar}
              views={sampleVideo.views}
              key={index}
            />
          )
        })}
      </div>
    </main>
  )
}
