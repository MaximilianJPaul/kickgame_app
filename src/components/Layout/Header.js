import React from "react";

import './Header.css';
import Cart from "../Cart/Cart";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Kick Game</h1>
            </div>
            <div className="header-cart">
                <Cart />
            </div>
        </div>
    )
};

export default Header;