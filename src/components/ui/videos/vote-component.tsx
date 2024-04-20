'use client'
import { vote } from '@/lib/database/actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { ToastAction } from '@/components/ui/toast'

export const Vote = ({ voted, videoId }: { voted: any; videoId: string }) => {
  const [voteState, setVoted] = useState(voted.voted)
  const submitVote = async () => {
    const { success, error } = await vote(videoId)
    if (error) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
        action: (
          <ToastAction altText="Try again" onClick={submitVote}>
            Resubmit Vote
          </ToastAction>
        ),
      })
    }

    if (success) {
      toast({
        description: 'Your vote has been submitted.',
      })
      setVoted(true)
    }
  }

  if (voted.loggedIn == false) {
    return (
      <Button asChild>
        <Link href="/login">Vote</Link>
      </Button>
    )
  }
  if (voteState || voted.voted == true) {
    return <Button disabled>Voted</Button>
  }
  return <Button onClick={submitVote}>Submit Vote</Button>
}
