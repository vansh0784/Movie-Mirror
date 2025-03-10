import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data}) => {
  return (
    <div className='w-full mt-4 flex flex-wrap justify-center pl-5 bg-[#121212]'>
        {data.map((c,i)=><Link key={i} className='mr-[3%] mb-[3%] w-[20vw] bg-zinc-950 p-2 rounded'>
            <img src={`https://image.tmdb.org/t/p/original/${c.profile_path||c?.backdrop_path}`} alt="posters" className='object-cover h-[40vh] shadow-[8px,17px,38px,2px,rgba(0,0,0,0.5)]' />
            <h1 className='text-lg font-semibold p-1 text-zinc-300 '>{c?.title||c?.name||c?.original_title}</h1>
        </Link>)}
    </div>
  )
}

export default Cards