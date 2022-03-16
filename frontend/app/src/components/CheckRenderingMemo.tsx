import React, { memo } from 'react'

const CheckRenderingMemo = memo(() => {
  console.log('Render Memo')
  return <div></div>
})

export default CheckRenderingMemo
