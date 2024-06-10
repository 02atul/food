import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import useMovies from './hooks/useMovies'
import { addTrailerVideo } from '../utilis/movieSlice'
import { API_OPTIONS } from '../utilis/constant'

const VideoBackground = ({movieId}) => {
  const [trailerId , setTrailerId]  = useState()
  // const trailerVideo = useSelector((store) =>store.movies?.trailerVideo)
  //   const dispatch = useDispatch();
    
  
    const getMoviesVideos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/976573/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      // console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] :json.results[0];
       console.log(trailer);
      // console.log(trailer);
     setTrailerId(trailer.key)
     console.log(trailer.key);
    };
  
    useEffect(()=>{
   getMoviesVideos()
    },[])
  // console.log(trailerVideo);
  
  return (
    <div className='w-screen '>
      <iframe className='w-screen aspect-video '
       
      src={"https://www.youtube.com/embed/"+ trailerId + "?&autoplay=1&mute=1"}
      title="YouTube video player" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>

      </iframe>
    </div>
  )
}

export default VideoBackground
