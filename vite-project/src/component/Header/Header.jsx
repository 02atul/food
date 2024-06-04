import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div id='header' className='m-auto bg-contain relative justify-center items-center w-auto mx-auto' >
        <div id="header-contents" className='flex absolute flex-col items-start break-normal '>
            <h2 className=''>
                Order your favourite here
            </h2>
            <p className='text-s   p-3 '>
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. 
                one delicious at a time
            </p>
             <button>
                View Menu
             </button>
        </div>
      
    </div>
  )
}

export default Header
