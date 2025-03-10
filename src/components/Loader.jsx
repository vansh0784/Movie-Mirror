import React from 'react'
import movieLoader from "../assets/movieloader.gif";
import logo from "../assets/tv1svg.svg";
const Loader = () => {
  return (
    <>
      <div className='bg-black flex flex-col items-start justify-start w-screen h-screen text-white p-3'>
      <span className='flex items-start justify-center gap-4'>
        <img src={logo} alt="" className='w-10' />
          <h1 className='text-2xl font-semibold text-zinc-300'>Movie-Mirror</h1>

        </span>
        <div className='flex items-center justify-center ml-[22%]'>
          <img src={movieLoader} alt="Loader" className='w-full object-cover' />
        </div>


      </div>
    </>
  )
}

export default Loader