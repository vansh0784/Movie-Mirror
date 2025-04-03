import axios from "../../utils/axios";
import { loadDetail } from "../reducers/personSlice";
export {removeDetail} from "../reducers/personSlice";
export const loadpersonDetail=(id)=>async(dispatch,getState)=>{
    try{
        const detail=await   axios.get(`/person/${id}`);
        const externalId=await axios.get(`/person/${id}/external_ids`);
        const movieCredits=await axios.get(`/person/${id}/movie_credits`);
        const tvCredits=await axios.get(`/person/${id}/tv_credits`);
        const combinedCredits=await axios.get(`/person/${id}/combined_credits`);

        const largeData={
            details:detail?.data,
            externalId:externalId?.data,
            movieCredits:movieCredits?.data,
            combinedCredits:combinedCredits?.data,
            tvCredits:tvCredits?.data,
        }
        console.log(largeData);
        dispatch(loadDetail(largeData));
    } catch(err){

        console.log(err.message);
    }
};