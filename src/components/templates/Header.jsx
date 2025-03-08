import React from 'react';
import { Link } from 'react-router-dom';
const Header = ({ data }) => {
  console.log(data);

  const backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), ${backgroundImage}`,
    backgroundPosition: "top 1%",
    backgroundSize: "cover",
  };

  return (
    <div className="w-full h-[50vh] flex flex-col justify-end items-start gap-2 p-[5%] " style={backgroundStyle}>
      <h1 className='text-white font-bold text-5xl '>{data?.title||data?.name||data?.original_title}</h1>
      <p className='text-white text-sm max-w-[80%]'>{data?.overview.slice(0,200)} <Link className='text-blue-500'>more...</Link></p>
      <p className='text-white'>
      <i className="ri-megaphone-line text-yellow-500 text-xl ">{" "}</i>
      {data?.first_air_data||"No info yet"}
      <i className="ri-album-line text-xl ml-3 text-yellow-500 ">{" "}</i>
      {data?.media_type}
      </p>
      <button className='px-4 py-2 bg-[#6556CD] rounded mt-3 text-white text-xl'><Link>Watch Trailer</Link></button>
    </div>
  );
}

export default Header;
