import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './Loader';
import axios from "../utils/axios";
const Movie = () => {
    document.title="Movie";
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const getMovieData = async () => {
        try {
            const { data } = await axios.get(`movie/${category}?page=${page}`);
            setMovie((prev) => [...prev, ...data?.results]);
            setPage(page + 1);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
            setMovie([]);
            setPage(1);
            getMovieData();
        }, [category]);
  return movie.length ? (
    <div className='w-screen min-h-screen text-zinc-400 bg-[#121212]  flex flex-col'>
            <div className='flex px-[3%] items-center'>
                <div className='flex gap-3 items-center w-[20%]'>
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl hover:text-[#6556CD]"></i>
                    <h1 className='text-3xl font-semibold'>Movie</h1>
                </div>
                <div className='flex w-[80%] items-center pt-2 justify-between gap-[1%]'>
                    <Topnav />
                    <div className='flex items-center gap-2'>
                        <Dropdown title={"category"} options={[ "popular", "upcoming","now_playing","top_rated"]} func={(e) => setCategory(e.target.value)} />
                    </div>
                </div>
            </div>

            <InfiniteScroll
                loader={<h1 className='bg-[#121212] text-zinc-300 px-[5%]'>Loading...</h1>}
                dataLength={movie.length}
                next={getMovieData}
                hasMore={true}
            >
                <div className="w-full flex flex-wrap justify-center gap-4">
                    <Cards data={movie} title={"movie"} />
                </div>
            </InfiniteScroll>
        </div>

  ): <Loader/>
}

export default Movie