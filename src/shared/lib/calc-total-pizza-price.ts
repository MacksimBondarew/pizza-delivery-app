import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const calcTotalPizzaPrice = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngridients: Set<number>
) => {
    const pizzaPrice = items.find(
        (item) => item.pizzaType === type && item.size === size
    )?.price;
    const totalIngridientsPrice = ingredients
        .filter((ingredient) => selectedIngridients.has(ingredient.id))
        .reduce((acc, ingredient) => acc + ingredient.price, 0);
    const totalPrice = totalIngridientsPrice + (pizzaPrice ? pizzaPrice : 0);
    return totalPrice;
};
