import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./Pages/games";
import Browse from "./Pages/Browse";
import NavBar from "./Components/Navbar";
import Breeds from "./Pages/Breeds";
import Home from "./Pages/home";
import Error from "./Pages/error";
// import Footer from "./Components/Footer";
import Memory from "./Games/memory";
import SlidingPuzzle from "./Games/slidingPuzzle";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/Games/memory" element={<Memory />} />
            <Route path="/Games/slidingPuzzle" element={<SlidingPuzzle />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
