import { createSlice } from "@reduxjs/toolkit";

export const tvSlice=createSlice({
    name:'tvSlice',
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

export const {loadDetail,removeDetail}=tvSlice.actions;

export default tvSlice.reducer;