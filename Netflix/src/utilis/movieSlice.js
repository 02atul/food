import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        ingMovies:null,
        addTrailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.addTrailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies,addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;