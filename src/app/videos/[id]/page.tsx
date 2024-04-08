import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id

  return (
    <main className="mx-5">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'User Videos', href: '/videos' },
          {
            label: 'Video',
            href: `/videos/${id}/`,
            active: true,
          },
        ]}
      />
      <p>Video Player for {id}</p>
    </main>
  )
}
