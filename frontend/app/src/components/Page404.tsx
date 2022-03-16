import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen'>
      <p className='text-2xl'>Page Not Found</p>
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

export default Page404
