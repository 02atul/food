import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets1/assets";
import { StoreContext } from "../../context/StoreContext";
// import { MdDescription } from 'react-icons/md'
const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setItemCount] = useState(0);
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div id="food-item" className="size-full m-auto rounded-2xl  ">
      <div id="food-item-img-container" className=" relative ">
        <img id="food-item-img" src={image} alt="" className="size-full columns-4 grid-cols-4" />
        {
        !cartItems[id]
                ?<img   className=" w-9 absolute bottom-4 right-4 cursor-pointer rounded" onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                 : <div id="food-item-counter" className=" absolute bottom-4 right-4 flex items-center gap-3 p-1 bg-white ">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" /> 
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                 </div>
        }
      </div>
      <div id="food-item-info" className="p-5">
        <div
          id="food-item-name-rating"
          className="flex justify-between items-center mb-3"
        >
          <p className="text-sm font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" className="w-20" />
        </div>
        <p id="food-item-des" className="text-xs">
          {description}
        </p>
        <p id="food-item-price" className="text-xl m-2 font-medium">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
