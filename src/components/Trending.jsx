import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from "../utils/axios";
import Cards from './templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    document.title="Trending";
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    document.title="Trending"+" "+category.toUpperCase();
    const getTrendingData = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}?page=${page}`);
            setTrending((prev) => [...prev, ...data?.results]);
            setPage(page + 1);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setTrending([]);
        setPage(1);
        getTrendingData();
    }, [category, duration]);

    return trending.length ? (
        <div className='w-screen min-h-screen text-zinc-400 bg-[#121212]  flex flex-col'>
            <div className='flex px-[3%] items-center'>
                <div className='flex gap-3 items-center w-[20%]'>
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl hover:text-[#6556CD]"></i>
                    <h1 className='text-3xl font-semibold'>Trending</h1>
                </div>
                <div className='flex w-[80%] items-center pt-2 justify-between gap-[1%]'>
                    <Topnav />
                    <div className='flex items-center gap-2'>
                        <Dropdown title={"category"} options={["all", "movie", "tv"]} func={(e) => setCategory(e.target.value)} />
                        <Dropdown title={"duration"} options={["day", "week"]} func={(e) => setDuration(e.target.value)} />
                    </div>
                </div>
            </div>

            <InfiniteScroll
                loader={<h1 className='bg-[#121212] text-zinc-300 px-[5%]'>Loading...</h1>}
                dataLength={trending.length}
                next={getTrendingData}
                hasMore={true}
            >
                <div className="w-full flex flex-wrap justify-center gap-4">
                    <Cards data={trending} />
                </div>
            </InfiniteScroll>
        </div>
    ) : <Loader />;
}

export default Trending;
