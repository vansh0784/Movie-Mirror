import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data,func }) => {
    console.log(func);
  return (
    <div className="w-[100%] h-[35%] flex flex-col items-start justify-start gap-4 p-3">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
        <div className="flex items-center text-zinc-100 p-2">
          <label htmlFor="options" className="sr-only">
            Options
          </label>
          <select
            name="option"
            id="options"
            className="rounded border bg-gray-700 border-gray-300"
            onChange={func}
          >
            <option defaultValue="All" value="all">
              All
            </option>
            <option value="movie">Movies</option>
            <option value="tv">TV</option>
          </select>
        </div>
      </div>
      <div className="flex w-full min-h-[35vh] gap-3 overflow-y-hidden text-zinc-200 mt-2">
        {data.map((val, i) => (
          <div
            key={i}
            className="w-[15%] min-h-[33vh] p-2 bg-gray-700 rounded-md flex-shrink-0 flex flex-col items-start justify-between mb-2"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
