import { Fragment } from "react";
import CartModal from "../Modal/CartModal";

const LoginPage = (props) => {

 const loginSubmitHandler = () =>{

    const userid = props.cred.findIndex()
 }



    return <CartModal>

        <form onSubmit={loginSubmitHandler}>
            <label>UserName</label>
            <input type="text"  name="Email" ></input>

            <label>Password</label>
            <input type="Password" name="Email"></input>

            <button >Login</button>
            <button onClick={props.onClose} >Close</button>
        </form>

    </CartModal>

}

export default LoginPage; 