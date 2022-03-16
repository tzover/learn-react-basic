import React, { useRef } from 'react'
import CheckRendering from './CheckRendering'
import CheckRenderingMemo from './CheckRenderingMemo'

const RefSample = () => {
  const refText = useRef<HTMLInputElement | null>(null)

  return (
    <div className='flex'>
      <input
        type='text'
        className='flex-1 border-2 border-orange-400'
        ref={refText}
      />
      <div className='mx-5'>
        <button
          type='button'
          className='py-3 px-10 rounded-2xl bg-orange-200 hover:bg-orange-400'
          onClick={() => console.log(refText.current?.value)}
        >
          Go
        </button>
      </div>
      <CheckRendering />
      <CheckRenderingMemo />
    </div>
  )
}

export default RefSample
