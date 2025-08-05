import { Routes, Route } from 'react-router-dom'
import Games from './Pages/Games'
import NavBar from './Components/Navbar'
import Breeds from './Pages/Breeds'
import Breed from './Pages/Breed'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import Footer from './Components/Footer'
import Memory from './Pages/MemoryGame'
import SlidingPuzzle from './Pages/SlidingPuzzle'
import BreedGuesser from './Pages/BreedGuesser'


const App = () => {


  return (
    <>

      <div id="layout">

        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='games' element={<Games />} />
          <Route path="games/memory" element={<Memory />} />
          <Route path="games/puzzle" element={<SlidingPuzzle />} />
          <Route path="games/guesser" element={<BreedGuesser />} />
          <Route path='breeds' element={<Breeds />} />
          <Route path="breeds/:breed" element={<Breed />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>



    </>
  )

}

export default App;
