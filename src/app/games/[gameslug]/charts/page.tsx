import Breadcrumbs from '@/components/ui/videos/breadcrumbs'

export default async function Page({
  params,
}: {
  params: { gameslug: string }
}) {
  const game = params.gameslug
  console.log(game)
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Home', href: '/' },
          {
            label: `${game} Charts`,
            href: `/games/${game}/charts`,
            active: true,
          },
        ]}
      />
      <p>{game} Charts</p>
    </main>
  )
}
