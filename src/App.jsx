import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Video from './pages/Video/Video'


const App = () => {
  const [sidebar,setSideBar]= useState(true);
  return (
    <div> 
      <Navbar setSideBar={setSideBar} /> 
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      
    </div>
  )
}

export default App