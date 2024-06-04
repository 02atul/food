import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  const [menu,setMenu]= useState("Home")
  return (
      
    <div id='navbar' className='p-5 flex  justify-between items-center'>
      <img className='w-40' src={assets.logo}/>
      <ul id='navbar-menu' className='flex  gap-5 text-lime-500 font-bold '>
        <li onClick = {()=>setMenu("Home")} className={menu==="Home" ? "active": ""}>Home</li>
        <li onClick = {()=>setMenu("Menu")} className={menu==="Menu" ? "active": ""}>Menu</li>      
        <li  onClick = {()=>setMenu("Mobile-app")} className={menu==="Mobile-app" ? "active": ""}>Mobile-app</li>
        <li onClick = {()=>setMenu("Contact-us")} className={menu==="Contact-us" ? "active": ""}>Contact Us</li>

      </ul>
       <div id="navbar-right" className='flex items-center gap-10'>
        <img src={assets.search_icon}/>
             <div id="navbar-search-icon" className='relative'>
                <img src={assets.basket_icon}/>
                <div id="dot" className='absolute min-w-3 min-h-3 bg-red-400 rounded '>

                </div>
             </div>
             <button className='bg-transparent text-xl p-3 border-2 border-sky-500 text-black  rounded-full cursor-pointer hover:bg-gray-300 transition' >Sign In</button>
       </div>
    </div>
  )
}

export default Navbar
