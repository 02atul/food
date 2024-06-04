import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div id='food-display' className='mt-8'>
      <h2 className='font-semibold'>Top dishes near you </h2>
      <div id="food-display-list" className='grid mt-8 gap-8 '>
        {food_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} 
            image={item.image} price={item.price}/>
          }
         
        })}
      </div>
    </div>
  )
}

export default FoodDisplay;
