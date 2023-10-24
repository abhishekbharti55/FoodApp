import { Fragment, useContext } from "react";
import "./FoodList.css"
import FoodForm from "./FoodForm";
import CartContext from "./Store/CartContext";


const FoodList = (props) => {

    const cartCtx = useContext(CartContext);

  //const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.AddItem({
      id: props.id,
      name: props.name,
      Amount: amount,
      price: props.price
    });
  };

    return (
        

            <li className="food-list">
                <div className="innerlist">
                    <h2>{props.name}</h2>
                    <h2>{`Rs ${props.price}`}</h2>

                </div>
                <FoodForm key = {props.id} id = {props.id} onAddToCart = {addToCartHandler}/>


            </li>
       
    );




};

export default FoodList;