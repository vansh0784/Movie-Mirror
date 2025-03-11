import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
    return (
        <div className='w-full flex flex-wrap justify-center gap-4 bg-[#121212]'>
            {data.map((c, i) => (
                <Link key={i} className='relative w-[250px] bg-zinc-950 p-2 rounded shadow-lg mr-3 mb-3'>
                    <img
                        src={c.profile_path || c.backdrop_path
                            ? `https://image.tmdb.org/t/p/original/${c.profile_path || c.backdrop_path}`
                            : 'https://via.placeholder.com/250x350?text=No+Image'}
                        alt="poster"
                        className='w-full h-[40vh] object-cover shadow-lg'
                    />
                    <h1 className='text-lg font-semibold p-1 text-zinc-300'>
                        {c?.title || c?.name || c?.original_title}
                    </h1>
                    {c?.vote_average && !Number.isNaN(c.vote_average) && c.vote_average > 0 ? (
                        <div className='absolute rounded-full p-1 bg-zinc-300 text-gray-800 w-15 h-15 flex items-center justify-center bottom-[25%] right-[-5%]'>
                            {(c.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    ) : null}
                </Link>
            ))}
        </div>
    );
}

export default Cards;
