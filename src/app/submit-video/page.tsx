import { Separator } from '@/components/ui/separator'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { SubmissionForm } from '@/components/ui/submit-video/video-submission-form'

export default async function SubmitVideo() {
  const supabase = createClient()
  const userSession = (await supabase.auth.getSession()).data.session
  if (!userSession) redirect('/login')

  return (
    <div className="space-y-6 p-10">
      <div>
        <h3 className="text-lg font-medium">Video Submission</h3>
        <p className="text-sm text-muted-foreground">Submit your clip</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-x-7 sm:flex-row">
        <p>Video Player</p>
        <SubmissionForm />
      </div>
    </div>
  )
}
