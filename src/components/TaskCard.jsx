import React from 'react'

function TaskCard({status, name}) {
  return (
    <div className='rounded-lg p-4 mb-4 border border-white bg-white shadow hover:shadow-md hover:border-gray-200 cursor-pointer'>
        <p className='text-[#168E14] bg-green-200 rounded-lg px-4 py-1 w-fit mb-4 text-[0.9rem] font-semibold'>Done</p>
        <p className='text-gray-800 tracking-wider text-[0.9rem]'>
        imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        </p>
        <div className='flex justify-end gap-4 items-center mt-5'>
            <p>del</p>
            <p>toggle</p>
        </div>
    </div>
  )
}

export default TaskCard