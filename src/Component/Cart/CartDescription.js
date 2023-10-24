import { Fragment, useContext } from "react";
import CartModal from "../Modal/CartModal";
import classes from './CartDescription.module.css';
import CartContext from '../Store/CartContext'
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
  
    const totalAmount = `RS ${cartCtx.Amount}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.RemoveItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.AddItem({ ...item, Amount: 1 });
    };
  
    const cartItems = (
      <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            Amount={item.Amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    const orderHandler = () => {
        alert("Order Place Successfully");
        props.onClose();
    }
  
    return (
      <CartModal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
      </CartModal>
    );
  };

export default Cart;