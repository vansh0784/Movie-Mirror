import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "../../assets/noimage.webp";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);

  const getSearches = async () => {
    try {
      const data = await axios.get(`/search/multi?query=${query}`);
      setResponse(data?.data?.results || []);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSearches();
  }, [query]);
  return (
    <div className="w-[100%] relative h-[9vh] flex gap-5 justify-start items-center ml-[15%] cursor-pointer">
      <i className="ri-search-2-line text-2xl font-semibold text-zinc-200"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies, shows and manymore.."
        className="text-white w-[60%] outline-none border-none bg-transparent "
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line text-2xl font-semibold text-zinc-200"
        ></i>
      )}
      <div className="absolute max-h-[50vh] w-[60%] ml-[4%] bg-gray-300 top-[100%] overflow-auto">
        {response.map((val, idx) => (
          <Link
            key={idx}
            className="p-4 text-zinc-900 hover:bg-zinc-300 hover:text-black duration-300 flex justify-between items-center border-b-2  "
          >
            <span>
              {val?.name ||
                val?.original_name ||
                val?.original_title ||
                val?.original_name}
            </span>
            <img
              src={
                val.profile_path || val.backdrop_path || val.poster_path
                  ? `https://image.tmdb.org/t/p/w300/${
                      val.backdrop_path || val.poster_path || val.profile_path
                    }`
                  : noimage
              }
              className="w-[10vh] h-[10vh] object-cover"
              alt={val?.name || "Movie Thumbnail"}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
