import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Trailer = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv";
    const data = useSelector(store => store?.[category]?.info?.video);
    console.log("Video Data:", data);

    return data ? (
        <div className='cursor-pointer h-screen z-999 w-screen flex items-center flex-col justify-center absolute top-0 left-0 bg-[rgba(0,0,0,0.8)]'>
            <i
                onClick={() => navigate(-1)}
                className="absolute ri-close-large-line text-2xl text-white top-10 left-[10%] hover:text-[#6556CD]"
            ></i>
                <ReactPlayer height={500} width={1080} url={`https://www.youtube.com/watch?v=${data?.key}`} />
        </div>
    ):<h1 className=' flex items-center justify-center text-gray-400 left-[-50]'>No Trailer Available</h1>;
};

export default Trailer;
