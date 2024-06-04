import React from 'react'
import './Footer.css'
import { assets } from '../../assets1/assets'
const Footer = () => {
  return (
    <div id='footer' className=' bg-gray-500 flex flex-col items-center pt-20 gap-5 mt-24 '>
      <div id="footer-content" className=' w-full grid gap-20 '>
        <div id="footer-content-left" className='flex flex-col items-start gap-5 '>
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quibusdam pariatur explicabo reiciendis omnis quidem placeat alias necessitatibus nesciunt, sed ipsam repudiandae architecto atque sit eaque? Cupiditate esse eligendi iste?</p>
              <div id="footer-social-icons" className=' w-10 flex mr-9 justify-between' >
                <img src={assets.facebook_icon} alt="" className='mb-2 mr-3'/>
                <img src={assets.twitter_icon} alt="" className='mb-2 mr-3'/>
                <img src={assets.linkedin_icon} alt="" className='mb-2 mr-3' />
              </div>
        </div>
        <div id="footer-content-center" className='flex flex-col items-start gap-5'>
         <h2 className=' text-white font-bold'>COMPANY</h2>
         <ul className=' mb-3'>
            <li>Home</li>
            <li>About Us</li>
            <li> Delivery</li>
            <li>Privacy Policy</li>
         </ul>
        </div>
        <div id="footer-content-right" className='flex flex-col items-start gap-5'>
            <h2 className=' text-white font-bold'> GET IN TOUCH   </h2>
            <ul className='mb-3'>
                <li>+1-123-456-7890</li>
                <li>atul@acropolis.in</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-1 m-5 bg-gray-500 ' />
      <p id='f+' >Copyright 2024 © Tomato.com - All right reserved </p>
    </div>
  )
}

export default Footer
