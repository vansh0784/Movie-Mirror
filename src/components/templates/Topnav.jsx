import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  return (
    <div className=" relative h-[9vh] flex gap-5 justify-start items-center ml-[15%] cursor-pointer">
      <i className="ri-search-2-line text-2xl font-semibold text-zinc-200"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search movies, shows and manymore.."
        className="text-white w-[70%] outline-none border-node bg-transparent "
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery(" ")}
          className="ri-close-line text-2xl font-semibold text-zinc-200"
        ></i>
      )}
      <div className="absolute max-h-[50vh] w-[70%] ml-[5%] bg-gray-300 top-15 overflow-auto">
        {/* <Link className="p-4 text-zinc-900 hover:bg-zinc-300 hover:text-black duration-300 flex justify-start items-center border-b-2  ">

          <img src="" alt="" />
          <span>for text</span>
        </Link> */}

      </div>
    </div>
  );
};

export default Topnav;
