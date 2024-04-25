import React from 'react'
import TaskCard from './TaskCard'
import { useSelector } from 'react-redux'
import { store } from '../store/store'

function Alltasks() {

  const todos= useSelector(state=>state.todos)
  console.log(todos)
  
  return (
    <div className='flex justify-between items-center flex-wrap gap-6'>
        {
        todos?.map((todo)=>{
          console.log(todo)
            return(
                <div className='w-1/5' key={todo.id}>
                    <TaskCard status={todo.completed} name={todo.taskDetail} date={todo.date} time={todo.time} id={todo.id}/>
                </div>
            )
        })
    }
    </div>
  )
}

export default Alltasks