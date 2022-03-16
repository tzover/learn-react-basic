import React from 'react'
import { useNavigate } from 'react-router-dom'

const TaskPage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen bg-purple-200'>
      <p className='text-2xl'>Task Page</p>
      <div className='my-10'>
        <button
          type='button'
          className='p-8 bg-green-200 rounded-full hover:bg-green-400'
          onClick={() => navigate('/home/:sample')}
        >
          Home
        </button>
      </div>
    </div>
  )
}

export default TaskPage
