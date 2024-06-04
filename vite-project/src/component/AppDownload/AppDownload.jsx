import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets1/assets'
const AppDownload = () => {
  return (
    <div id='app-download' className=''>
      <p className='m-auto mt-24 items-center font-medium mb-5'>For better Experience <br className=' items-center' />Tomato App</p>
      <div id="app-download-platform" className=''>
        <img src={assets.play_store} alt="" className=' mr-2'/>
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
