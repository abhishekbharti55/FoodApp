
import './CartHeader.css'
import carticon from '../../asset/icons8-cart-94.png';
import Cart from './CartDescription';
import { Fragment, useContext, useState } from 'react';
import CartContext from '../Store/CartContext';
import LoginDashboard from '../Credential/LoginDashboard';

const CartHeader = (props) => {

 const [isLogin , setisLogin] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.Amount;
  }, 0);

  const showloginhandler =() => {
    setisLogin(true);
  }

  const hideloginhandler =() => {
    setisLogin(true);
  }

  return (<Fragment>
    <div className='headerCartbuttonContain'>

      <div className="headerCartbutton" onClick={props.onShowCart}>
        <img src={carticon} ></img>
        <button className="headerbutton" > Cart </button>
        {numberOfCartItems}
      </div>
      <div className='loginbtn'>
        {isLogin && <LoginDashboard onClose = {hideloginhandler}/>}
        <button className="headerbuttonLogin" onClick={showloginhandler}> Login </button>
      </div>
    </div>

  </Fragment>

  );
};


export default CartHeader;