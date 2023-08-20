import React, { useEffect, useState, useContext } from "react";

import './AddYeezy.css';
import AddYezzyForm from "./AddYezzyForm";
import Yeezy from "./Yeezy";
import CardContext from "../../store/card-context";

const AddYeezy = () => {
    const [shoes, setShoes] = useState([]);
    const shoesCtx = useContext(CardContext);

    const addShoesHandler = (async function(shoeInfo) {
        const response = await fetch('https://kick-game-20d23-default-rtdb.europe-west1.firebasedatabase.app/shoes.json', {
            method: 'POST',
            body: JSON.stringify(shoeInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        showShoesHandler();
    });

    const showShoesHandler = async function() {
        const response = await fetch('https://kick-game-20d23-default-rtdb.europe-west1.firebasedatabase.app/shoes.json');
        const data = await response.json();

        const loadedData = []

        for (let key in data) {
            loadedData.push({
                id: key,
                imageURL: data[key].image,
                information: data[key].information,
                price: data[key].price
            })
        }

        setShoes(loadedData);
    }

    useEffect(() => {
        showShoesHandler();
    }, [])

    return (
        <React.Fragment>
            <AddYezzyForm onAdd={addShoesHandler}/>
            <div className="shoes">
                {shoes.map(shoe => {
                    return <Yeezy key={shoe.id} image={shoe.imageURL} information={shoe.information} price={shoe.price}/>
                })}
            </div>
        </React.Fragment>
    )
};

export default AddYeezy;