import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Games from './Pages/games'
import Breed from './Pages/Breed'
import NavBar from './Components/Navbar'
import Breeds from './Pages/Breeds'
import Home from './Pages/home'
import Error from './Pages/error'
import FetchData from './utils/FetchData'


function App() {
 
  return (
    <>
      <BrowserRouter>
    <NavBar />
    <main>
      <Routes>
      <Route index element = {<Home />} />
      <Route path='/home' element= {<Home />} />
      <Route path='/games' element = {<Games />} />
      <Route path='/breeds' element = {<Breeds />} />
      <Route path='/breed' element = {<Breed />} />
      <Route path='*' element = {<Error />} />

      </Routes>
      
    
    </main>
      </BrowserRouter>
    </>
  )

  
}

export default App
