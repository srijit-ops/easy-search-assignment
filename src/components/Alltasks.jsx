import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import Select from "react-select";
import { filterTask } from '../actions/actionCreators';

function Alltasks() {
  const dispatch= useDispatch()
  const todos= useSelector(state=>state.todos)
  const filter= useSelector(state=>state.filter)
  const [selectedOption, setSelectedOption] = useState({ value: "all", label: "All" });
  const filterOptions=[
    {
      value:"completed",
      label:"Completed"
    },
    {
      value:"pending",
      label:"Pending"
    },
    {
      value:"all",
      label:"All"
    }
  ]
  
  useEffect(()=>{
    dispatch(filterTask({filter:selectedOption.value}))
  },[selectedOption])

  const filteredTodos= todos.filter((todo)=>{
    if(filter==="completed"){
      return todo.completed===true
    }else if(filter==="pending"){
      return todo.completed===false
    }
      return todo
  })
  
  return (
    <div>
      <div className='w-full flex justify-start items-center mb-8'>
      <Select
            // styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            styles={{menu: (base) => ({
              ...base,
              width: "max-content",
              minWidth: "100%"
         }),}}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={filterOptions}
          />
      </div>
      <div className='flex justify-start items-center flex-wrap gap-9'>
      {
      filteredTodos?.map((todo)=>{
        console.log(todo)
          return(
              <div className='w-[18%]' key={todo.id}>
                  <TaskCard status={todo.completed} name={todo.taskDetail} date={todo.date} time={todo.time} id={todo.id}/>
              </div>
          )
      })
  }
  </div>
    </div>
  )
}

export default Alltasks