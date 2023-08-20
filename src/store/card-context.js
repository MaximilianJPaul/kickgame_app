import React, { createContext } from "react";

const CardContext = createContext({
    items: {},
    totalAmount: 0
});

export default CardContext;