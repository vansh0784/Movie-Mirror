import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTvDetail, removeDetail } from "../store/actions/TvActions";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import imdb from "../assets/imdb.png";
import { Link } from "react-router-dom";
import HorizontalCards from "../components/templates/HorizontalCards";
const TvDetails = () => {
  const {pathname}=useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((store) => store.tv);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadTvDetail(id));
  }, [id]);
  const backgroundImage = `url(https://image.tmdb.org/t/p/original/${info?.details?.backdrop_path})`;
  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.8)), ${backgroundImage}`,
    backgroundPosition: "top 1%",
    backgroundSize: "cover",
  };
  return info ? (<div style={backgroundStyle} className=" relative w-screen h-[180vh] px-[10%]">
    <nav className="flex items-center gap-4 w-full h-[10vh]">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-left-line text-2xl text-gray-800 hover:text-[#6556CD]"
      ></i>
      <a target="_blank" href={`${info.details.homepage}`}>
        <i className="ri-external-link-fill text-gray-800 text-xl"></i>
      </a>
      <a
        target="_blank"
        href={`https://www.wikidata.org/wiki/${info?.externalId?.wikidata_id}`}
      >
        <i className="ri-global-fill  text-gray-800 text-xl "></i>
      </a>
      <a
        target="_blank"
        href={`https://www.imdb.com/title/${info?.externalId?.imdb_id}`}
      >
        <img className="object-fit w-10" src={imdb} alt="" />
      </a>
    </nav>
    <div className=" flex w-full relative">
      <img
        src={
          info?.details?.poster_path
            ? `https://image.tmdb.org/t/p/original/${info?.details?.poster_path}`
            : "https://via.placeholder.com/250x350?text=No+Image"
        }
        alt="poster"
        className="h-[60vh] object-cover shadow-lg"
      />
      <div className="flex flex-col gap-4 ml-[6%]">
        <h1 className=" font-bold text-6xl text-gray-100">
          {info?.details?.title ||
            info?.details?.name ||
            info?.details?.original_title}
          <span className="text-2xl text-gray-200 font-semibold ml-3 text-center">
            ({info?.details?.first_air_date.split("-")[0]})
          </span>
        </h1>
          <div className="absolute rounded-full text-xl font-semibold p-1 bg-zinc-300 text-gray-800 w-15 h-15 flex items-center justify-center bottom-[7%] left-[20%]">
            {(info?.details?.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
          <div className="flex gap-4 text-zinc-100">
            <span className="text-sm font-semibold">Date:- {info?.details?.first_air_date}</span>
            <span className="text-sm font-semibold">Genre- {info?.details?.genres.map(g=>g?.name).join(',')}</span>
          </div>
        <div className=" flex text-white flex-col">
          <h1 className="text-xl italic font-semibold">{info?.details?.tagline}</h1>
          <h1 className="text-[15px] mt-3 text-gray-300">Overview</h1>
          <p className="text-[13px] font-medium text-gray-200 max-w-[90%]">{info?.details?.overview}</p>
          <h1 className="mt-3 text-[15px] text-gray-300">Translated</h1>
          <p className="text-[13px] font-medium text-gray-200 max-w-[90%] mb-4">{info?.translations?.map(t=>t).join(", ")}</p>
          <Link to={`${pathname}/trailer`} className="text-white bg-[#6556CD] p-2 rounded w-2/12">
          <i class="ri-play-fill mr-2 text-xl"></i> {"Play Trailer"}
          </Link>
        </div>
      </div>
    </div>
    <div className="my-3">
    <hr className="mt-3 mb-3 border-none h-[1px] bg-zinc-500 "/>
    <h1 className="text-2xl text-gray-100 font-semibold mt-1 px-2 py-1">Seasons</h1>
    <div className="flex w-[100%] gap-3 overflow-y-hidden">{
      info?.details?.seasons.map((s,i)=>(<div key={i} className=" flex flex-col gap-1 bg-zinc-950 px-2 py-1 text-zinc-200 rounded h-[41vh] mb-1 ">
        <img src={`https://image.tmdb.org/t/p/original/${s.backdrop_path || s?.profile_path || s?.poster_path}`} alt="posters" className="h-[30vh] min-w-40 rounded" />
        <h1 className="px-1 text-sm font-semibold">{s?.name}</h1>
      </div>))
      }

    </div>

    </div>
    <div>
      <hr className="mt-3 mb-3 border-none h-[1px] bg-zinc-500 "/>
      <h1 className="text-2xl text-gray-100 font-semibold mt-1 px-2 py-1">Recommendations & Similar</h1>
      <HorizontalCards data={info.recommendations.length>0?info.recommendations:info.similar} func={null} />
        <Outlet/>
    </div>
  </div>
) : (
  <Loader />
);
}

export default TvDetails