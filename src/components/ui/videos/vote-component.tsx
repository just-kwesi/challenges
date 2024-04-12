import { hasVoted, vote } from '@/lib/database/actions'

export const Vote = async ({ videoId }: { videoId: string }) => {
  const voted = await hasVoted(videoId)
  console.log(voted)
  if (voted.loggedIn == false) {
    return <div>Not Logged in</div>
  }
  if (voted.voted == true) {
    return <div>Already Voted</div>
  }
  return <div>Vote</div>
}
