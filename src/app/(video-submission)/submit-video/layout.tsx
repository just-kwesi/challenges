import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Your Game Clip | Klipped',
  description:
    'Share your best gaming clips from Apex Legends, Overwatch, and more on Klipped. Upload now to get featured and climb the leaderboards!',
}

export default function SubmitVideolayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
