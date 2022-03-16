import React from 'react'
import logo from './logo.svg'
import './App.css'

// function App() {
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <main className='bg-blue-200 min-h-screen text-left px-5'>
        {/* Concept */}
        <div className='py-5'>
          <h1 className='text-3xl'>Practice</h1>
        </div>

        {/* Agenda */}
        <div>
          <ul className='pb-5 border-b-2 border-gray-500'>
            <li>Component</li>

            <li>Hooks</li>
            <li>Routing</li>
          </ul>
        </div>

        {/* Practice */}
        <div className='bg-blue-100 my-5 px-3'>
          <div className='my-3'>
            <h2 className='text-xl'>Practice zone</h2>
          </div>
          <div className='px-3 my-2'>
            <p>Component</p>
          </div>
          <div className='px-3 my-2'>
            <p>Hooks</p>
          </div>
          <div className='px-3 my-2'>
            <p>Routing</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
