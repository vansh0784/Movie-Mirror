import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loader from "./Loader";
const Home = () => {
  document.title = "Homepage";
  const [wallPaper, setWallPaper] = useState();
  const [trending, setTrending] = useState();
  const [category, setCategory] = useState("all");
  const getWallPaper = async () => {
    try {
      const { data } = await axios.get("trending/all/day");
      let randomData =
        data?.results[(Math.random() * data?.results.length).toFixed()];
      setWallPaper(randomData);
    } catch (err) {
      console.log(err);
    }
  };
  const getTrendingData = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      setTrending(data?.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    !wallPaper && getWallPaper();
  }, []);
  useEffect(() => {
    getTrendingData();
  }, [category]);
  console.log(trending)
  return wallPaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-hidden overflow-y-auto">
        <Topnav />
        <Header data={wallPaper} />
        <div className="w-full flex items-center justify-between p-3">
          <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
          <div className="flex items-center text-zinc-100 p-2">
            <Dropdown
              title={"trending"}
              options={["all", "movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <HorizontalCards
          data={trending}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
