'use client'

import { XIcon } from 'lucide-react'
import { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { categories } from './data'

import { DataTableViewOptions } from '@/components/ui/videos-page/data-table-column-toggle'
import { DataTableFacetedFilter } from './charts-table-faceted-filter'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div>
      <div className="flex items-center py-3">
        <Input
          placeholder="Filter Videos..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Input
          placeholder="Filter Videos..."
          value={
            (table.getColumn('category')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('category')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DataTableViewOptions table={table} />
      </div>
      <div className="flex items-center pb-3">
        {table.getColumn('category') && (
          <DataTableFacetedFilter
            column={table.getColumn('category')}
            title="Category"
            options={categories}
          />
        )}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
