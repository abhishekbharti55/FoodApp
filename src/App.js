
import { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Component/UI/Header';
import FoodSiteDescription from './Component/UI/FoodSiteDescription';
import FoodDashboard from './Component/FoodDashboard';
import Cart from './Component/Cart/CartDescription';
import CartProvider from './Component/Store/CartProvider';



function App() {
  const [isCartShown , SetisCartShown] = useState(false);

const showCartHandler = () => SetisCartShown(true);
const hideCartHandler =() => SetisCartShown(false);
  return (
   <CartProvider>
      {isCartShown && <Cart onClose = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler}/>
      <FoodSiteDescription/>
      <FoodDashboard/>
   
   </CartProvider>
  );
}

export default App;
