import React from 'react'
import { Link    } from 'react-router-dom'
const Sidenav = () => {
  return (
   <div className='w-[20%] h-full border-r-2 border-r-zinc-200 p-5 text-white'>
      <h1>
      <i class="ri-movie-ai-fill text-red-600 text-2xl font-bold"></i>
      <span className='text-xl text-white font-semibold ml-1 '>Movie Mirror</span>
      </h1>
      <nav className='flex flex-col gap-3  text-zinc-400  text-md  '>
        <h1 className='text-white font-semibold mt-8 mb-5 text-md   '>New Feeds</h1>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '> <i class="mr-2 ri-fire-line"></i>Trending</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '><i class="mr-2 ri-bard-fill"></i> Popular</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '><i class="mr-2 ri-movie-2-line"></i> Movies</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '><i class="mr-2 ri-tv-line"></i> Tv Shows</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '> <i class="mr-2 ri-team-line"></i> People</Link>
      </nav>
      <hr className='h-2px bg-zinc-100 mt-3'/>
      <nav className='flex flex-col gap-3  text-zinc-400  text-md   '>
        <h1 className='text-white font-semibold mt-8 mb-5 text-md   '>Website Info</h1>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '><i class="ri-information-line mr-2"></i> About</Link>
        <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-1 '><i class="ri-customer-service-2-line mr-2"></i> Contact Us</Link>
      </nav>


   </div>
  )
}

export default Sidenav