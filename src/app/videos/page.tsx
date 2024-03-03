import { Separator } from '@/components/ui/separator'
import { getUserVideos } from '@/lib/database/actions'
import { VideoList } from '@/components/ui/videos-page/videos-list'
import { DataTable } from '@/components/ui/videos-page/data-table'
import { toast } from '@/components/ui/use-toast'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { VideoType, columns } from './columns'

export default async function VideosPage() {
  const { error, success } = await getUserVideos()

  if (error) {
    toast({
      variant: 'destructive',
      title: 'Something went wrong getting your videos',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Return to the home page</p>
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </pre>
      ),
    })
  }
  const data = success
    ? success?.map((vid) => {
        return {
          game: vid.games?.name!,
          title: vid.title!,
          category: vid.categories?.name!,
          status: vid.reviewed!,
        }
      })
    : undefined

  return (
    <div>
      {data && (
        <>
          <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  User Videos
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of all the videos you have submitted
                </p>
              </div>
            </div>
            {/* <VideoList videoList={success} /> */}
            <DataTable columns={columns} data={data} />
          </div>
        </>
      )}
    </div>
  )
}
