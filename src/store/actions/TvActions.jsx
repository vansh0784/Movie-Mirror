import axios from "../../utils/axios";
import { loadDetail } from "../reducers/tvSlice";
export {removeDetail} from "../reducers/tvSlice";
export const loadTvDetail=(id)=>async(dispatch,getState)=>{
    try{
        const detail=await   axios.get(`/tv/${id}`);
        const recommend=await axios.get(`/tv/${id}/recommendations`);
        const externalId=await axios.get(`/tv/${id}/external_ids`);
        const similar=await axios.get(`/tv/${id}/similar`);
        const video=await axios.get(`/tv/${id}/videos`);
        const watchProviders=await  axios.get(`/tv/${id}/watch/providers`);
        const translations=await axios.get(`/tv/${id}/translations`)

        const largeData={
            details:detail?.data,
            recommendations:recommend?.data?.results,
            externalId:externalId?.data,
            similar:similar?.data?.results,
            video:video?.data?.results.find(m=>m.type==="Trailer"),
            watchProviders:watchProviders?.data?.results?.IN,
            translations:translations?.data?.translations?.map(t=>t.english_name),
        }
        dispatch(loadDetail(largeData));
    } catch(err){

        console.log(err.message);
    }
};