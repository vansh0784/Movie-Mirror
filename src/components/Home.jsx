import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
const Home = () => {
  document.title = "Homepage";
  const [wallPaper, setWallPaper] = useState();
  const [trending, setTrending] = useState();
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
      const { data } = await axios.get(`trending/all/day`);
      setTrending(data?.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    !wallPaper && getWallPaper();
    !trending && getTrendingData();
  }, []);
  return wallPaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto">
        <Topnav />
        <Header data={wallPaper} />
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1 className="text-white">Loading....</h1>
  );
};

export default Home;
