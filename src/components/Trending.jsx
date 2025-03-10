import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from "../utils/axios";
import Cards from './templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
const Trending = () => {
    const [category,setCategory]=useState("all");
    const [duration,setDuration]=useState("day");
    const [trending,setTrending]=useState(null);
    const navigate=useNavigate();

    const getTrendingData = async () => {
        try {
          const { data } = await axios.get(`trending/${category}/${duration}`);
          setTrending(data?.results);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(()=>{
        getTrendingData();
    },[category,duration]);
    console.log(trending);
  return trending ? (
    <div className='w-screen h-screen text-zinc-400 bg-[#121212] px-[2%] overflow-hidden overflow-y-auto'>
        <div className='flex items-center '>
            <div className='flex gap-3 items-center w-[20%]'>
                <i onClick={()=>navigate(-1)} className="ri-arrow-left-line text-2xl hover:text-[#6556CD]"></i>
                <h1 className='text-3xl font-semibold'>Trending</h1>
            </div>
            <div className='flex w-[80%] items-center pt-2 justify-between gap-[1%]'>
                <Topnav/>
                <div className='flex items-center gap-2'>
                <Dropdown title={"category"} options={["all","movie","tv"]} func={(e)=>setCategory(e.target.value)}/>
                <Dropdown title={"duration"} options={["week","day"]} func={(e)=>setDuration(e.target.value)}/>
                </div>
            </div>

        </div>
        <InfiniteScroll
          loader={<h1 className='text-xl px-10 text-zinc-200'>Loading.....</h1>}
          dataLength={trending.length}
          hasMore={true}
        >
        <Cards data={trending}/>
        </InfiniteScroll>

    </div>
  ):<Loader/>
}

export default Trending