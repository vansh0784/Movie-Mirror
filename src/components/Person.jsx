import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Topnav from './templates/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import Loader from './Loader';
import axios from "../utils/axios";
const Person = () => {
    document.title="People";
    const [category, setCategory] = useState("popular");
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const getPeopleData = async () => {
        try {
            const { data } = await axios.get(`person/${category}?page=${page}`);
            setPeople((prev) => [...prev, ...data?.results]);
            setPage(page + 1);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
            setPeople([]);
            setPage(1);
            getPeopleData();
        }, [category]);
  return people.length ? (
    <div className='w-screen min-h-screen text-zinc-400 bg-[#121212]  flex flex-col'>
            <div className='flex px-[3%] items-center'>
                <div className='flex gap-3 items-center w-[20%]'>
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line text-2xl hover:text-[#6556CD]"></i>
                    <h1 className='text-3xl font-semibold'>People</h1>
                </div>
                <div className='flex w-[80%] items-center pt-2 justify-between gap-[1%]'>
                    <Topnav />
                </div>
            </div>

            <InfiniteScroll
                loader={<h1 className='bg-[#121212] text-zinc-300 px-[5%]'>Loading...</h1>}
                dataLength={people.length}
                next={getPeopleData}
                hasMore={true}
            >
                <div className="w-full flex flex-wrap justify-center gap-4">
                    <Cards data={people} />
                </div>
            </InfiniteScroll>
        </div>

  ): <Loader/>
}

export default Person