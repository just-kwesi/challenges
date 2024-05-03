import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | Access Your Account',
  description:
    'Reset Password to submit your game clips, vote on other highlights, and customize your klipped experience.',
}

export default function ResetPassowrd({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
