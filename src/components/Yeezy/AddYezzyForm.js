import React, { useReducer, useState } from "react";

import './AddYezzyForm.css';

const initialForm = {
    image: '',
    information: '',
    price: ''
}

const addShoeReducer = (state, action) => {
    switch(action.type) {
        case 'imageURL':
            return {...state, image: action.payload};
        case 'shoeInformation':
            return {...state, information: action.payload};
        case 'shoePrice':
            return {...state, price: action.payload};
        case 'reset':
            return initialForm;
        default:
            throw new Error('Incorrectly filled form!')
    }
}

const AddYezzyForm = props => {
    const [addShoe, dispatchAddShoe] = useReducer(addShoeReducer, initialForm);
    const [isValid, setIsValid] = useState(true);

    const addShoeHandler = event => {
        event.preventDefault();

        for (let key in addShoe) {
            if (addShoe[key].trim().length <= 0) {
                setIsValid(prevValue => false);
            } else {
                setIsValid(prevValue => true);
            }
        }

        props.onAdd(addShoe);
        dispatchAddShoe({type: 'reset'});
        setIsValid(false);
    }
    

    return (
        <div className={"add-form"}>
            {!isValid && <p>Fill the Form</p>}
            <form onSubmit={addShoeHandler} className="add-form__yeezy">
                <input value={addShoe.image} type="text" name="image" placeholder="Image URL" autoComplete="off" onChange={(event) => dispatchAddShoe({type: 'imageURL', payload: event.target.value})}/>
                <input value={addShoe.information} type="text" name="information" placeholder="Yezzy Info" autoComplete="off" onChange={(event) => dispatchAddShoe({type: 'shoeInformation', payload: event.target.value})}/>
                <input value={addShoe.price} type="number" placeholder="Price" autoComplete="off" onChange={(event) => dispatchAddShoe({type: 'shoePrice', payload: event.target.value})}/>
                <button onSubmit={addShoeHandler}>Add Yeezy</button>
            </form>
        </div>
    )
};

export default AddYezzyForm;