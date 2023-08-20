import React, { useContext } from "react";

import './Yeezy.css';
import CardContext from "../../store/card-context";

const Yeezy = (props) => {
    const cardCtx = useContext(CardContext);

    const addProductToCardHandler = () => {
        cardCtx.items[props.key] = {
            image: props.image,
            information: props.information,
            price: props.price,
            amount: cardCtx.items[props.key].amount + 1
        };

        cardCtx.totalAmount += 1;
    }

    return (
        <div className="item">
            <div className="item-image" style={{backgroundImage: `url(${props.image})`}}>
            </div>
            <div className="item-info">
                <p>{props.information}</p>
                <p>From ${props.price}</p>
                <button onClick={addProductToCardHandler}>Add</button>
            </div>
        </div>
    )
};

export default Yeezy;