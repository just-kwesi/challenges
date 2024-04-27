'use client'

import Link from 'next/link'
import { ColumnDef } from '@tanstack/react-table'

// @ts-ignore
import tc from 'thousands-counter'

import { chartRowData } from '@/lib/database/types'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { categories } from '@/components/ui/charts/data'

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
      return <p className="font-semibold">{videoRank as string}</p>
    },
  },
  {
    id: 'video',
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Video" />
    ),
    cell: ({ row }) => {
      const videoId = row.original.id
      console.log(row.original)
      const username = row.original.username

      return (
        <div className="">
          <Link
            href={`/videos/${videoId}?charts=true`}
            className={cn('transition-colors hover:text-foreground/80')}
          >
            <span className="max-w-[200px] truncate font-medium inline-block">
              {row.getValue('video')}
            </span>
          </Link>

          <Link
            href={`/user/${username}?charts=true`}
            className={cn('transition-colors hover:text-foreground/80')}
          >
            <p className="text-sm text-muted-foreground">{username}</p>
          </Link>
        </div>
        // <Link
        //   href={`/videos/${row.original.id}`}
        //   className={cn('transition-colors hover:text-foreground/80')}
        // >
        //   <span className="max-w-[500px] truncate font-medium">
        //     {row.getValue('video')}
        //   </span>
        // </Link>
      )
    },
  },
  {
    id: 'category',
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const videoCatetegory = categories.find(
        (category) => category.value === row.getValue('category')
      )

      if (!videoCatetegory) {
        return null
      }
      // console.log(row.getValue('category'))
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
          {videoCatetegory.label}
        </code>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'votes',
    accessorKey: 'vote_count',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Votes" />
    ),
    cell: ({ row }) => {
      return (
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
          {tc(row.getValue('votes'), 2)}
        </p>
      )
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
