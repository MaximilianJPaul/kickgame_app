import React, { useState, useEffect } from "react";
import './Sidebar.css';


const Sidebar = () => {
    const carouselElements = ["Sell Your Sneakers", "New Arrivals", "Best Sellers"];
    const carouselLength = carouselElements.length;
    const [currentElement, setCurrentElement] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCurrentElement(prevValue => prevValue === (carouselLength - 1) ? 0 : prevValue + 1)
        }, 5000)

        return () => {
            clearTimeout()
        }
    }, [currentElement, carouselLength])

    const onClickLeftHandler = () => {
        console.log(currentElement)
        setCurrentElement(prevValue => prevValue === 0 ? carouselLength - 1 : prevValue - 1);
    }

    const onClickRightHandler = () => {
        console.log(currentElement)
        setCurrentElement(prevValue => prevValue === (carouselLength - 1) ? 0 : prevValue + 1);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-carousel">
                <button onClick={onClickLeftHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </button>
                <div className="sidebar-carousel__elements">
                    <p>{carouselElements[currentElement]}</p>
                </div>
                <button onClick={onClickRightHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Sidebar;