import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Games from './Pages/games'
import Home from './Pages/home'
import Breeds from './Pages/Breeds'
import Error from './Pages/error'
import Breed from './Pages/Breed'






function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element = {<Home />} />
      <Route path='/home' element= {<Home />} />
      <Route path='/games' element = {<Games />} />
      <Route path='/breeds' element = {<Breeds />} />
      <Route path='/breed' element = {<Breed />} />
      <Route path='*' element = {<Error />} />

      </Routes>
      
      
      </BrowserRouter>


    </div>
  )

  
}

export default App
