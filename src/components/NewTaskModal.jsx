import React, { useState } from 'react'
import CustomModal from './common/CustomModal'
import ModalInput from './common/ModalInput';
import { disablePastDate } from '../utils/helperFunction';

function NewTaskModal() {
    const [open, setOpen] = useState(false);
 
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false)
  };
  return (
    <div>
        <div className='flex justify-between items-center flex-wrap mb-10'>
      <h2 className='text-3xl text-[#546ef3] font-semibold tracking-wider'>All todos</h2>
      <button className='px-4 py-2 text-gray-950 bg-white' onClick={onOpenModal}>Add new</button>
      </div>
      <CustomModal open={open} onCloseModal={onCloseModal} title={"Add new task"}>
    
      <ModalInput labelText="Enter the task" dataType="text" holder="task name" addId="taskDef"/>
      <ModalInput labelText="Enter the date" dataType="date" holder="date" addId="taskDate"  mindate={disablePastDate()}/>
          <ModalInput labelText="Enter the time" dataType="time" holder="time" addId="taskTime"/>
    <div className='flex justify-center items-center mt-8'>
      <button className='rounded-lg px-6 py-2 bg-[#546ef3] text-white'>Save task</button>
    </div>
   
  </CustomModal>
    </div>
    
  )
}

export default NewTaskModal