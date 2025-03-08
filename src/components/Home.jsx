import React, { useEffect,useState } from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from "../utils/axios";
import Header from './templates/Header';
const Home = () => {
    document.title="Homepage";
    const [wallPaper,setWallPaper]=useState();
    const getWallPaper=async()=>{
      try{
        const {data}= await axios.get("trending/all/day");
        let randomData=data?.results[(Math.random()*data?.results.length).toFixed()];
        setWallPaper(randomData);
        console.log(randomData);
      } catch(err){
        console.log(err);
      }
    }
    useEffect(()=>{
     !wallPaper&&getWallPaper();
    },[])
  return wallPaper ? (
    <>
    <Sidenav/>
    <div className='w-[80%]  h-full'>
        <Topnav/>
        <Header data={wallPaper}/>
    </div>
    </>
  ):<h1 className='text-white'>Loading....</h1>
}

export default Home