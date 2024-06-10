import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from "./VideoBackground"
import { useSelector } from 'react-redux'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
const MainContainer = () => {
  
  const movies = useSelector((Store)=>Store.movies?.nowPlayingMovies)
  if (!movies)  return;
  const mainmovies = movies[0];
 
  
  const {original_title,overview,id} = mainmovies;
  
  return (
    <div>
      <VideoTitle title = {original_title} overview={overview}/>
     <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer;
