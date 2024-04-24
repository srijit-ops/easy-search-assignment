import React from 'react'
import TaskCard from './TaskCard'

function Alltasks() {
  return (
    <div className='flex justify-between items-center flex-wrap gap-6'>
        {
        [1,2,3,4,5,6,7].map(()=>{
            return(
                <div className='w-1/5'>
                    <TaskCard/>
                </div>
            )
        })
    }
    </div>
  )
}

export default Alltasks