import { Fragment } from "react";
import  ReactDOM  from "react-dom";

import './CartModal.css';
const Backdrop = (props) => {
return <div className="backdrop" onClick={props.onClose}></div>
}

const ModalOverlay = (props) => {
return <div className="cart-checkout">
    <div className="content">{props.children}</div>
</div>
}

const overlay = document.getElementById('overlay');

const CartModal = (props) => {

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose= {props.onClose}/> , overlay)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , overlay)}
        </Fragment>

}


export default CartModal;