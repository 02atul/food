import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-[20%] w-screen aspect-video absolute  px-24 text-d no-underline text-white bg-gradient-to-r from-black  '>
      <h1 className='text-4xl font-bold no-underline'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='text-white'>
        <button className='p-4 px-12 text-black bg-white text-lg  rounded-lg  space-y-1.5 hover:bg-opacity-50  '>▶️ Play</button>
        <button className=' mx-2 p-4 px-12 text-lg bg-gray-500 rounded-lg opacity-50 font-extrabold text-white'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
