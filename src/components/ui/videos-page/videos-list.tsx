import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { videosWithData } from '@/lib/database/types'

type videoData = {
  games: { name: string }
  title: string
  categories: { name: string }
  reviewed: boolean
}

export type videoDataList = videoData[]

export function VideoList({ videoList }: { videoList: videosWithData }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Game</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead className="text-right">Staus</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videoList.map((video, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {video.games ? video.games.name : 'Game Title'}
              </TableCell>
              <TableCell>{video.title}</TableCell>
              <TableCell>
                {video.categories ? video.categories.name : 'Video Category'}
              </TableCell>
              <TableCell className="text-right">
                {video.reviewed ? 'Passed' : 'In review'}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
