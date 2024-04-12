import { redirect } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { createClient } from '@/lib/supabase/server'
import VideoPlayerContainer from '@/components/ui/video-player/video-container'

import { getGamesAndCategories } from '@/lib/database/actions'

export default async function SubmitVideo() {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session
  if (!userSession) redirect('/login')

  const res = await getGamesAndCategories()

  return (
    <div className="space-y-6 p-10" suppressHydrationWarning>
      <div>
        <h3 className="text-lg font-medium">Video Submission</h3>
        <p className="text-sm text-muted-foreground">Submit your clip</p>
      </div>
      <Separator />
      <VideoPlayerContainer res={res} />
    </div>
  )
}
