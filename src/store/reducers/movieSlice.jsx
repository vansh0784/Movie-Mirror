import { createSlice } from "@reduxjs/toolkit";

export const movieSlice= createSlice({
    name:'Movie',
    initialState:{
        info:null,
    },
    reducers:{
        loadDetail:(state,action)=>{
            state.info=action.payload;
        },
        removeDetail:(state,action)=>{
            state.info=null;
        }
    }
});

export const {loadDetail,removeDetail} = movieSlice.actions;
export default movieSlice.reducer;