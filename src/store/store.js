import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './slices/projects'
import detailsReducer from './slices/details'
export  const  store = configureStore({
    reducer:{
        projects: projectsReducer,
        details: detailsReducer
    }
})