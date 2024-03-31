import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Video from './pages/Video/Video'

const App = () => {
  return (
    <div> 
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      
    </div>
  )
}

export default App