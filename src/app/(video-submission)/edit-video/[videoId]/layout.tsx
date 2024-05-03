import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edit Your Uploaded Game Clip | Klipped',
  description:
    'Edit the title, description, and game tags of your uploaded game clips at Klipped. Ensure your highlights shine and attract more viewers and votes!',
}

export default function EditVideoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
