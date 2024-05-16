'use client'

import Link from 'next/link'
import { ColumnDef } from '@tanstack/react-table'

import { videoRowData } from '@/lib/database/types'
import { FileCheckIcon, HourglassIcon, BanIcon } from 'lucide-react'

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
import { DataTableColumnHeader } from './data-table-column-header'
import { cn } from '@/lib/utils'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VideoType = {
  game: string
  title: string
  category: string
  status: boolean
}

export const columns: ColumnDef<videoRowData>[] = [
  {
    accessorKey: 'game',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Game" />
    ),
    cell: ({ row }) => {
      const gameLabel = row.original.games?.name
      return (
        <div className="flex">
          {gameLabel && <Badge variant="outline">{gameLabel}</Badge>}
        </div>
      )
    },
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const videoId = row.original.id

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
    accessorKey: 'category',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category = row.original.categories?.name
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
          {category}
        </code>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const reviewed: boolean = row.original.reviewed!
      const approved: boolean = row.original.approved!

      return (
        <div className="flex w-[100px] items-center">
          {approved && (
            <>
              <FileCheckIcon className="h-4 w-4 mr-2  text-green-700" />
              <p className="text-sm text-green-700">Accepted</p>
            </>
          )}

          {!reviewed && (
            <>
              <HourglassIcon className="h-4 w-4 mr-2 text-destructive bg-destructive-forground" />
              <p className="text-sm text-destructive bg-destructive-forground ">
                In Review
              </p>
            </>
          )}

          {reviewed && !approved && (
            <>
              <BanIcon className="h-4 w-4 mr-2 text-destructive bg-destructive-forground" />
              <p className="text-sm text-destructive bg-destructive-forground ">
                Rejected
              </p>
            </>
          )}
        </div>
      )
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const video = row.original

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
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/edit-video/${video.id}`}>Edit Video Details</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
