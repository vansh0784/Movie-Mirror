import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home.jsx";
import "./index.css";
import Popular from "../src/components/Popular.jsx"
import Trending from './components/Trending.jsx';
import Movie from './components/Movie.jsx';
import Tv from './components/Tv.jsx';
import Person from './components/Person.jsx';
const App = () => {
  return (
    <div className='w-screen h-screen bg-[#121212] flex '>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
        <Route path='/popular' element={<Popular/>}></Route>
        <Route path='/movie' element={<Movie/>}></Route>
        <Route path='/tvshows' element={<Tv/>}></Route>
        <Route path='/people' element={<Person/>}></Route>
      </Routes>
    </div>
  )
}

export default App