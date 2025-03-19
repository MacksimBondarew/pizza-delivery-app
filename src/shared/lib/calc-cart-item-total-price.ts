import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
    // Check if there are ingredients and if they exist (not undefined or empty array)
    const ingredientsPrice = item.ingredients && item.ingredients.length > 0 
        ? item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0)
        : 0;  // Default to 0 if no ingredients

    return (ingredientsPrice + item.productItem.price) * item.quantity;
};