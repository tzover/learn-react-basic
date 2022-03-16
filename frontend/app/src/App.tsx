import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Default from './components/Default'

// components
import Home from './components/Home'
import Page404 from './components/Page404'

// function App() {
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/home/:sample' element={<Home />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path={`*`} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
