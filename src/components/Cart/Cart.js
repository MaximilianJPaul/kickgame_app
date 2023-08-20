import React, { useContext, useState } from "react";

import './Cart.css'
import CardContext from "../../store/card-context";

const Cart = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const cardCtx = useContext(CardContext);

    const showCardHandler = (event) => {
        event.preventDefault();
        console.log(cardCtx)
    }

    return (
        <button onClick={showCardHandler} className="button">
            Cart
        </button>
    )
};

export default Cart;