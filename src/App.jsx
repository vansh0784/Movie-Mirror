import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home.jsx";
import "./index.css";
import Loader from './components/Loader.jsx';
import Trending from './components/Trending.jsx';
const App = () => {
  return (
    <div className='w-screen h-screen bg-[#121212] flex'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/trending' element={<Trending/>}></Route>
      </Routes>
    </div>
  )
}

export default App