import React from 'react'
import { Badge } from './ui/badge'
import { FilterType } from '@/lib/data'
import { Button } from './ui/button'
import { Filter } from 'lucide-react'

const StatsAndFilters = ({completedTaskCount = 0, activeTaskCount = 0, filter = "all", setFilter,}) => {
  return (
   <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
      {/* phan thong ke */}
      <div className='flex gap-3'>
        <Badge
          variant = "secondary"
          className= "bg-white/50 text-accent-foreground border-info/20"
        >
          {activeTaskCount} {FilterType.active}
        </Badge>
  
        <Badge
          variant = "secondary"
          className= "bg-white/50 text-success border-success/20"
        >
          {completedTaskCount} {FilterType.completed}
        </Badge>
       
      </div>
      {/* phan filter */}
      <div className='flex gap-2'>
        { Object.keys(FilterType).map((type) =>(
          <Button key={type} variant={filter === type ? "gradient" : "ghost"} size="sm" className='capitalize' onClick={() => setFilter(type)}>
            <Filter className='size-4' />
            {FilterType[type]}
          </Button>
        ))
        }
      </div>
   </div>
  )
}

export default StatsAndFilters
