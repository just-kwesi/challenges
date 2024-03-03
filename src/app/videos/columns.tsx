'use client'

import { ColumnDef } from '@tanstack/react-table'

import { videosWithData } from '@/lib/database/types'
import { log } from 'console'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type VideoType = {
  game: string
  title: string
  category: string
  status: boolean
}

export const columns: ColumnDef<VideoType>[] = [
  {
    accessorKey: 'game',
    header: 'Game',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'status',
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const state: boolean = row.getValue('status')
      console.log(state)

      return <div className="text-right font-medium">{state}</div>
    },
  },
]

// header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)

//       return <div className="text-right font-medium">{formatted}</div>
//     },
