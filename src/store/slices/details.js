import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name:'details',
    initialState: {details:{}},
    reducers:{
        fetchDetails: (state,action)=>{
            state.details = action.payload
        }
    }
})

export const {fetchDetails} = detailsSlice.actions;
export default detailsSlice.reducer