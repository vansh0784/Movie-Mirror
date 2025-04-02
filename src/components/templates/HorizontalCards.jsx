import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return data.length > 0 ? (
    <div className="w-full h-[35%] flex flex-col items-start justify-start">
      <div className="flex w-full min-h-[35vh] gap-2 overflow-y-hidden text-zinc-200 mt-2">
        {data.map((val, i) => (
          <Link
            to={`/${val?.media_type}/detail/${val?.id}`}
            key={i}
            className="w-[13vw] min-h-[30vh] p-2 bg-zinc-950 rounded-md flex-shrink-0 flex flex-col gap-y-1 items-start"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${val.backdrop_path || val?.profile_path || val?.poster_path}`}
              alt="trending-cards"
              className="w-full h-[40%] object-cover rounded-md"
            />
            <h1 className="font-bold text-md m-0">
              {val?.title || val?.name || val?.original_title}
            </h1>
            <p className="text-sm m-0">
              {(val?.overview || "No description available.").slice(0, 75)}
              <span className="text-blue-500"> more...</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="text-2xl text-gray-300">Nothing to show!!</h1>
  );
};

export default HorizontalCards;
