import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateStatus } from '../actions/actionCreators'

function TaskCard({status, name, date, time, id}) {
  console.log(status, name, date, time)
  const dispatch=useDispatch()

  const toggleStatus=()=>{
    dispatch(updateStatus({todoId:id}))
  }
  const deleteTodo=()=>{
    dispatch(deleteTask({delId:id}))
  }
  return (
    <div className={`rounded-lg p-4 mb-4  bg-white ${status===false && " hover:shadow-md hover:border-gray-200 shadow border border-white"}`}>
        <p className={`${status===false?"text-[#F4511E] bg-red-200":"text-[#168E14] bg-green-200"}  rounded-lg px-4 py-1 w-fit mb-4 text-[0.9rem] font-semibold`}>{status===false?"Pending":"Done"}</p>
        
        <p className='text-gray-800 tracking-wider text-[0.9rem]'>
        {name}
        </p>
        <div className='flex justify-between items-center border-t border-gray-300 my-4 pt-2'>
          <p className='text-sm text-gray-500'>{date}</p>
          <p className='text-sm text-gray-500'>{time}</p>
        </div>
        <div className='flex justify-end gap-4 items-center mt-5'>
            <button onClick={deleteTodo}>del</button>
            <button onClick={toggleStatus}>toggle</button>
        </div>
    </div>
  )
}

export default TaskCard