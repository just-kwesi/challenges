import { Separator } from '@/components/ui/separator'
import Videos from '@/components/ui/videos/videos'

const videos = [
  {
    id: 1,
    name: 'How to Use Tailwind CSS with React',
    likes: 120,
    reviewed: true,
  },
  {
    id: 2,
    name: 'Advanced React Component Patterns',
    likes: 305,
    reviewed: false,
  },
  // Add more video objects as needed
]
const video = videos[0]
// Helper function to shorten titles longer than a specific length
const shortenTitle = (title, maxLength = 50) => {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`
  }
  return title
}

export default function VideosPage() {
  return (
    <main className="">
      <div className="space-y-0.5 mt-5 text-center">
        <h2 className="text-2xl font-normal tracking-tight">Videos</h2>
      </div>
      <Separator className="my-6" />
      <Videos />

      <div className="flex flex-col p-4 border-b border-gray-200">
        <h2 className="text-lg font-bold">{shortenTitle(video.name)}</h2>
        <p className="text-gray-600">Likes: {video.likes}</p>
        <p className="text-gray-600">
          Reviewed: {video.reviewed ? 'Yes' : 'No'}
        </p>
      </div>
    </main>
  )
}
