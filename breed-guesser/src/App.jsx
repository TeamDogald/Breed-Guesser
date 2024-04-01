
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Games from './Pages/games'
import Browse from './Pages/Browse'
import NavBar from './Components/Navbar'
import Breeds from './Pages/Breeds'
import Breed from './Pages/Breed'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import Memory from './Games/memory'


const App = () => {


  return (
    <>

      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Games' element={<Games />} />
        <Route path="/Games/Memory" element={<Memory />} />
        <Route path='/breeds' element={<Breeds />} />
        <Route path="/breeds/:breed" element={<Breed />} />


        <Route path='/browse' element={<Browse />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>


      <Footer />

    </>
  )

}

export default App;
