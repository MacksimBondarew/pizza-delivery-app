import React from "react";
import { useCartStore } from "../store/cart";

export const useCart = () => {
    const state = useCartStore((state) => state);
    React.useEffect(() => {
        state.fetchCartItems();
    }, []);

    return state;
};
