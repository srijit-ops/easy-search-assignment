import React, { useRef, useState } from 'react'
import CustomModal from './common/CustomModal'
import ModalInput from './common/ModalInput';
import { disablePastDate } from '../utils/helperFunction';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/actionCreators';
import { useSelector } from 'react-redux';
import { nextTodoId } from '../utils/helperFunction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function NewTaskModal() {
    const dispatch= useDispatch()
    const [open, setOpen] = useState(false);
    const taskRef= useRef(null)
    const dateRef= useRef(null)
    const timeRef= useRef(null)
    const todos= useSelector(state=>state.todos)
 
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false)
  };

  const addTaskHandler=()=>{
    const newTask={
      id:nextTodoId(todos),
      taskDetail:taskRef?.current.value,
      date: dateRef?.current.value,
      time: timeRef?.current.value,
      completed: false
    }
    onCloseModal()
    dispatch(addTask(newTask))
  }
// console.log(useSelector(state=>state.todos))
  return (
    <div>
        <div className='flex justify-between items-center flex-wrap mb-10'>
      <h2 className='text-3xl text-gray-800 font-semibold tracking-wider'>All todos</h2>
      <button className='px-4 py-2 text-white bg-[#546ef3] hover:bg-gray-950 flex justify-between items-center gap-2 rounded-lg' onClick={onOpenModal}>
      <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg"
                  />
        Add new
      </button>
      </div>
      <CustomModal open={open} onCloseModal={onCloseModal} title={"Add new task"}>
    
      <ModalInput labelText="Enter the task" dataType="text" holder="task name" addId="taskDef" referecnce={taskRef}/>
      <ModalInput labelText="Enter the date" dataType="date" holder="date" addId="taskDate" referecnce={dateRef}  mindate={disablePastDate()}/>
          <ModalInput labelText="Enter the time" dataType="time" holder="time" addId="taskTime" referecnce={timeRef}/>
    <div className='flex justify-center items-center mt-8'>
      <button className='rounded-lg px-6 py-2 bg-[#546ef3] text-white' onClick={addTaskHandler}>Save task</button>
    </div>
   
  </CustomModal>
    </div>
    
  )
}

export default NewTaskModal