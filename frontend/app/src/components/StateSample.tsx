import React, { useState } from 'react'
import CheckRendering from './CheckRendering'
import CheckRenderingMemo from './CheckRenderingMemo'

const StateSample = () => {
  const [text, setText] = useState('')

  return (
    <div className='flex'>
      <input
        type='text'
        className='flex-1 border-2 border-green-400'
        onChange={(e) => setText(e.target.value)}
      />
      <div className='mx-5'>
        <button
          type='button'
          className='py-3 px-10 rounded-2xl bg-green-200 hover:bg-green-400'
          onClick={() => console.log(text)}
        >
          Go
        </button>
      </div>
      <CheckRendering />
      <CheckRenderingMemo />
    </div>
  )
}

export default StateSample
