import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const data = useSelector((store) => store?.[category]?.info);

  return (
    <div className="cursor-pointer h-screen z-999 w-screen flex items-center flex-col justify-center absolute top-0 left-0 bg-[rgba(0,0,0,0.8)]">
      <i
        onClick={() => navigate(-1)}
        className="absolute ri-close-large-line text-2xl text-white top-10 left-[10%] hover:text-[#6556CD]"
      ></i>
      { data?.video ?
        <ReactPlayer
          height={500}
          controls
          width={1080}
          url={`https://www.youtube.com/watch?v=${data?.video?.key}`}
        /> : <NotFound/>
      }
    </div>
  );
};

export default Trailer;
