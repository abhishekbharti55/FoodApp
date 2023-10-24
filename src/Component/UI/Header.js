import React, { Fragment } from "react";
import  "./Header.module.css";
import classes from './Header.module.css';
import food_image from '../../asset/food-img.jpg'
import CartHeader from "../Cart/CartHeader";

const Header = (props) => {

    return (
    <Fragment>
       
            <header className={classes.header} >

                <h1> Taste of Bihar</h1>
               
                 <CartHeader onShowCart = {props.onShowCart}/>
            </header>

            <div className={classes['main-image']}>

             <img src = {food_image}></img>
                
            </div>
        
    </Fragment>
    );
};

export default Header;