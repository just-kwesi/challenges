import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@/lib/supabase/server'
import EditContainer from '@/components/ui/submit-video/video-edit-container'
import { EditVideoType } from '@/lib/database/types'
import { getGamesAndCategories, getVideo } from '@/lib/database/actions'

export default async function SubmitVideo({
  params,
}: {
  params: { videoId: string }
}) {
  const videoId = params.videoId
  console.log(videoId)
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session
  if (!userSession) redirect('/login')

  const res = await getGamesAndCategories()
  const { success: videoData, error } = await getVideo(videoId)
  // console.log(videoData, error)

  return (
    <div className="space-y-6 p-10" suppressHydrationWarning>
      <div>
        <h3 className="text-lg font-medium">Edit Video Submission</h3>
        <p className="text-sm text-muted-foreground">
          Edit your submitted clip
        </p>
      </div>
      <Separator />
      {videoData && <EditContainer res={res} videoData={videoData[0]} />}
    </div>
  )
}
