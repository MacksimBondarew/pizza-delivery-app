import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngridients: Set<number>) => {
    const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngridients)
    const textDetaills = `${size} см, ${mapPizzaType[type]} пицца`;
    return { totalPrice, textDetaills };
};
