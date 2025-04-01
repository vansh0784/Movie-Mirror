import axios from "../../utils/axios";
import { loadDetail } from "../reducers/movieSlice";
export {removeDetail} from "../reducers/movieSlice";
export const loadMovieDetail=(id)=>async(dispatch,getState)=>{
    try{
        const detail=await   axios.get(`/movie/${id}`);
        const recommend=await axios.get(`/movie/${id}/recommendations`);
        const externalId=await axios.get(`/movie/${id}/external_ids`);
        const similar=await axios.get(`/movie/${id}/similar`);
        const video=await axios.get(`/movie/${id}/videos`);
        const watchProviders=await  axios.get(`/movie/${id}/watch/providers`);
        const translations=await axios.get(`/movie/${id}/translations`)

        const largeData={
            details:detail?.data,
            recommendations:recommend?.data?.results,
            externalId:externalId?.data,
            similar:similar?.data?.results,
            video:video?.data?.results.find(m=>m.type==="Trailer"),
            watchProviders:watchProviders?.data?.results?.IN,
            translations:translations?.data?.translations?.map(t=>t.english_name),
        }
        console.log(largeData);
        dispatch(loadDetail(largeData));
    } catch(err){

        console.log(err.message);
    }
};