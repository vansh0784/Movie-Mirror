import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadpersonDetail, removeDetail } from "../store/actions/PersonActions";
import { useNavigate, useParams,Link } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
const PersonDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [category,setCategory]=useState("tv");
  const { info} = useSelector((store) => store.person);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadpersonDetail(id));

    return () => {
      dispatch(removeDetail());
    };
  }, [ id,category]);
  if(!info) return <Loader/>
  return (
    <div className="px-[10%] w-screen h-[200vh] flex flex-col bg-[#121212] ">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-2xl text-gray-400 my-3 mb-4 hover:text-[#6556CD]"
      ></i>

      <div className="flex w-full gap-2">
        <div className="w-[18%] flex flex-col">
          <img
            src={
              info?.details?.profile_path
                ? `https://image.tmdb.org/t/p/original/${info.details.profile_path}`
                : "https://via.placeholder.com/250x350?text=No+Image"
            }
            alt="profile"
            className="h-[50vh] object-cover shadow-lg shadow-gray-800"
          />
          <hr className="mt-3 h-0.5 mb-3 bg-gray-500" />
          <div className="flex gap-5 mb-3 justify-center">
            {info?.externalId?.wikidata_id && (
              <>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                >
                  <i className="ri-global-fill text-gray-300 text-xl"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.facebook.com/${info.externalId.facebook_id}`}
                >
                  <i className="ri-facebook-circle-fill text-gray-300 text-xl"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.instagram.com/${info.externalId.instagram_id}`}
                >
                  <i className="ri-instagram-fill text-gray-300 text-xl"></i>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://x.com/${info.externalId.twitter_id}`}
                >
                  <i className="ri-twitter-x-fill text-gray-300 text-xl"></i>
                </a>
              </>
            )}
          </div>
          <div className="flex flex-col gap-3 text-zinc-400">
            <h1 className="text-[22px] font-semibold">Person Info</h1>
            <h1 className="text-lg font-semibold">Known For {" "} <span className="text-sm block text-zinc-300">{info?.details?.known_for_department}</span></h1>
            <h1 className="text-lg font-semibold">Gender {" "} <span className="text-sm block text-zinc-300">{info?.details?.gender===2?"Male":"Female"}</span></h1>
            <h1 className="text-lg font-semibold">Birthday {" "} <span className="text-sm block text-zinc-300">{info?.details?.birthday}</span></h1>
            <h1 className="text-lg font-semibold">Death Day {" "} <span className="text-sm block text-zinc-300">{info?.details?.death_day||"Still Alive"}</span></h1>
            <h1 className="text-lg font-semibold">Place of Birth {" "} <span className="text-sm block text-zinc-300">{info?.details?.place_of_birth}</span></h1>
          </div>
        </div>
        <div className="w-[82%] flex flex-col px-[4%] gap-3" >
        <h1 className=" font-bold text-6xl text-zinc-300">
            {info?.details?.title ||
              info?.details?.name ||
              info?.details?.original_title}
          </h1>
        <h1 className=" font-bold text-xl text-zinc-400">Biography</h1>
        <p className=" text-sm font-semibold text-zinc-300">
          {info?.details?.biography}
        </p>
        <h1 className=" font-bold text-lg text-zinc-400">Known For</h1>
        <HorizontalCards data={info?.combinedCredits?.cast} />
        <div className="flex justify-between">
          <span className=" font-semibold text-xl text-zinc-400 inline">Acting</span>
          <Dropdown
          title="category"
          options={["tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
          />
          </div>
          <HorizontalCards data={info[category+"Credits"]?.cast}/>
          {/* <div className="list-disc w-full border-zinc-600 border h-[60vh] overflow-y-auto shadow-sm shadow-gray-600">
            {info[category+"Credits"]?.cast.map((c,i)=><li key={i} className="hover:text-white duration-300 p-5 rounded hover:bg-[#19191d] cursor-pointer">
              <Link to="">
              <span className="">Movie_Name</span><span className="block px-5">Character Name: {}</span>
              </Link>


            </li>)}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
