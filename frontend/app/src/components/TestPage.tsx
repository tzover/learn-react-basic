import React from 'react'

interface Props {
  msg?: string
}

const TestPage: React.FC<Props> = (props) => {
  const { msg = 'none' } = props
  return (
    <div>
      <p className='text-xl'>TestPage</p>
      <p>
        Props : <span>{msg}</span>
      </p>
    </div>
  )
}

export default TestPage
