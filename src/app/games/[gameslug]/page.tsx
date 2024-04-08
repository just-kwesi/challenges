export default async function Page({ params }: { params: { id: string } }) {
  const game = params.id
  console.log(game)
  return (
    <main>
      <p>{game}</p>
    </main>
  )
}
