import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets1/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id='explore-menu' className='flex flex-col gap-5'>
      <h1 className='font-medium text-3xl items-center ml-24'>
        Explore our menu
      </h1>
      <p id='explore-menu-text' className='max-w-96 ml-24 font-semibold'>
        Choose from a diverse menu faeturing a dectable array of dishes.
        Our mission is to satisfy your craving your dining experience,
        one delicious meal at a time.
      </p>
      <div id="explore-menu-list"className='flex justify-between items-center gap-10 text-center 
      m-8 overflow-x-scroll'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev =>prev===item.menu_name?"All":item.menu_name)} key={index} id="explore-menu-list-item">
                       <img className = {category==item.menu_name?"active":""} src={item.menu_image} id='min-w-20 cursor-pointer rounded '/>
                       <p className='mt-3 cursor-pointer text-sm'>{item.menu_name}</p>
                </div>

            )
        })}
      </div>
    <hr className='m-3 h-1 bg-slate-200 border-none'/>
    </div>
  )
}

export default ExploreMenu
