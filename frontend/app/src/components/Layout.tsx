import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props
  return (
    <div className='bg-blue-200 min-h-screen text-left'>
      <header className='bg-blue-500 px-5 py-3'>
        <p className='text-4xl'>React Practice</p>
      </header>
      <main className='px-10 pb-10'>{children}</main>
      <footer className='fixed bottom-0 w-full bg-gray-500 py-2 px-10 text-right'>
        <p className='text-sm'>Aisin Edge Cloud Team</p>
      </footer>
    </div>
  )
}

export default Layout
