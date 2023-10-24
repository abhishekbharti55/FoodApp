import React, { Component, useReducer } from 'react';
import CartContext from './CartContext';

const defaultCart= {
    items:[],
    Amount:0
}

const cartReducer = (state , action) => {
    if(action.Type === "ADD"){
        const updatedAmount = state.Amount + action.item.price * action.item.Amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
       // console.log(existingCartItemIndex)
        const existingItem = state.items[existingCartItemIndex];
        let updatedItems;
      //  console.log(existingCartItemIndex);
        if(existingItem) {
            const updatedItem = {...existingItem , Amount: existingItem.Amount + action.item.Amount,};

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
           // console.log(updatedItems);
          } else {
            updatedItems = state.items.concat(action.item);
          }
          return {
            items: updatedItems,
            Amount: updatedAmount,
          };
        }
        if (action.Type === 'REMOVE') {
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          const existingItem = state.items[existingCartItemIndex];
          const updatedTotalAmount = state.Amount - existingItem.price;
          let updatedItems;
          if (existingItem.Amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
          } else {
            const updatedItem = { ...existingItem, Amount: existingItem.Amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          }
      
          return {
            items: updatedItems,
            Amount: updatedTotalAmount
          };
        }
      
        return defaultCart;
    };


const CartProvider = (props) => {
   const [cartState , dispatchfn] =  useReducer(cartReducer, defaultCart);

    const addItemHandler = (item) => {
        dispatchfn({Type: 'ADD' , item:item});
    }

    const removeItemHandler = (id) => {
        dispatchfn({Type:'REMOVE' , id:id});
    }


    const cartContext = {
        items:cartState.items,
        Amount:cartState.Amount,
        AddItem: addItemHandler,
        RemoveItem:removeItemHandler
    }

    return (<CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
    );
}


export default CartProvider;