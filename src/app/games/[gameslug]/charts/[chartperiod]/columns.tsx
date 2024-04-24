'use client'

import Link from 'next/link'
import { ColumnDef } from '@tanstack/react-table'

import { chartRowData } from '@/lib/database/types'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DataTableColumnHeader } from './charts-table-column-header'
import { cn } from '@/lib/utils'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VideoType = {
  rank: string
  video: string
  category: string
}

export const columns: ColumnDef<chartRowData>[] = [
  {
    accessorKey: 'rank',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rank" />
    ),
    cell: ({ row, getValue }) => {
      const videoRank = getValue()
      return <div className="flex">{videoRank as string}</div>
    },
  },
  {
    id: 'title',
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Video" />
    ),
    cell: ({ row }) => {
      const videoId = row.original.name

      return (
        <Link
          href={`/videos/${videoId}`}
          className={cn('transition-colors hover:text-foreground/80')}
        >
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('title')}
          </span>
        </Link>
      )
    },
  },
  {
    accessorKey: 'video_category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = row.original.video_category
      // console.log(row.original)
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
          {row.getValue('video_category')}
        </code>
      )
    },
    filterFn: (row, id, value) => {
      // console.log('category', row.getValue(category))
      console.log('filter function')
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const video = row.original
      //   console.log(`video, ${video}`)

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(video.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
