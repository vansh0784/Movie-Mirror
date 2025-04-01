import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data}) => {
  return (
    <div className="w-[100%] h-[35%] flex flex-col items-start justify-start gap-4 p-3">
      <div className="flex w-full min-h-[35vh] gap-3 overflow-y-hidden text-zinc-200 mt-2 mb-4">
        {data.map((val, i) => (
          <Link
            to={`/${val?.media_type || title}/detail/${val?.id}`}
            key={i}
            className="w-[15%] min-h-[33vh] p-2 bg-zinc-950 rounded-md flex-shrink-0 flex flex-col items-start justify-between mb-2 "
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${val.backdrop_path || val?.profile_path}`}
              alt="trending-cards"
              className="w-full h-[40%] object-cover rounded-md"
            />
            <h1 className='font-bold text-md'>
              {val?.title || val?.name || val?.original_title}
            </h1>
            <p className='text-sm'>
              {val?.overview.slice(0, 75)} <Link className='text-blue-500'>more...</Link>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
