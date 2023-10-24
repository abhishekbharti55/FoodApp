import { Fragment, useRef, useState } from "react";

import "./FoodForm.css"
import Input from "./Input";



const FoodForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };


    return (
        
            <form onSubmit={submitHandler}>

               
                <Input
                    ref={amountInputRef}
                    label='Amount'
                    input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '0',
                    }}
                /> 
                <button className="form-button" >Add to Cart</button>
                {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
            </form>
       
    );

}

export default FoodForm;