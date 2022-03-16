import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import Home from './components/Home'
import Default from './components/Default'
import AboutPage from './components/AboutPage'
import TaskPage from './components/TaskPage'
import Page404 from './components/Page404'
import ContactPage from './components/ContactPage'

// function App() {
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/home/:sample' element={<Home />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/task' element={<TaskPage />} />
        <Route path='/contact' element={<ContactPage />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path={`*`} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
