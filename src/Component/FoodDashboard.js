import { Fragment } from "react";
import FoodList from "./FoodList";

const food_menu = [
    {
        id:1,
        name: 'Butter Chicken',
        Type:'Non Veg',
        price: 290

    },
    {
        id:2,
        name: 'Mutton Curry',
        Type:'Non Veg',
        price: 390

    },
    {
        id:3,
        name: 'Paneer Butter Masala',
        Type:'Veg',
        price: 250

    },
    {
        id:4,
        name: 'Litti - Chokha',
        Type:'Veg',
        price: 60

    },
    {
        id:5,
        name: 'Fish Curry',
        Type:'Non Veg',
        price: 210

    },
]


const FoodDashboard = () => {
   const menu = food_menu.map((food) =>  <FoodList id={food.id} name ={food.name} price ={food.price} type = {food.Type}/>)

    return (
        <Fragment>
            <ul>{menu}</ul>
            
        </Fragment>
    );
    
};

export default FoodDashboard;