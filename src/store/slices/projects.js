import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name:'projects',
    initialState:{projects:[]},
    reducers:{
        fetchProjects: (state,action)=>{
            state.projects = action.payload
        },
        
    }
})

export const {fetchProjects} = projectsSlice.actions;

export default projectsSlice.reducer

