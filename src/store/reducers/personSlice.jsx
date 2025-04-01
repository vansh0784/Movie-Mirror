import { createSlice } from "@reduxjs/toolkit";

export const personSlice=createSlice({
    name:'Person',
    initialState:{
        info:null,
    },
    reducers:{
        loadDetail:(state,action)=>{
            state.info=action.payload;
        },
        removeDetail:(state,action)=>{
            state.info=null
        }
    }

});

export const {loadDetail,removeDetail} = personSlice.actions;
export default personSlice.reducer;