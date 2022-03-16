import React, { useCallback, useEffect, useState } from 'react'

const EffectSample = () => {
  const [num, setNum] = useState(0)

  const addNum = (prevNum: number) => {
    console.log('function')
    setNum(prevNum + 1)
  }

  // const addNum = useCallback((prevNum: number) => {
  //   console.log('function')
  //   setNum(prevNum + 1)
  // }, [])

  useEffect(() => {
    console.log(num, '% 5 = ', num % 5)
  }, [num])

  return (
    <div className='flex justify-center items-center'>
      <button
        type='button'
        className='p-5 rounded-2xl border-2 border-purple-200 hover:bg-purple-200'
        onClick={() => addNum(num)}
      >
        PUSH
      </button>
      <div className='mx-10'>
        <p>{num}</p>
      </div>
    </div>
  )
}

export default EffectSample
