import { useState } from 'react'
import NewTaskModal from './components/NewTaskModal'
import Alltasks from './components/Alltasks'

function App() {
  
  return (
    <div className='py-6 px-8'>
      <NewTaskModal/>
      <Alltasks/>
      {/* <Modal/> */}
    </div>
  )
}

export default App
