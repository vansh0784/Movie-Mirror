import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./components/Home.jsx";
import "./index.css";
const App = () => {
  return (
    <div className='w-screen h-screen bg-black flex'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App