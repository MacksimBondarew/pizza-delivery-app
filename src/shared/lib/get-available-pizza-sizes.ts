import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";

export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
        const filterPizzaByType  = items.filter((item) => item.pizzaType === type);
        const avaliablePizzaSizes = pizzaSizes.map((item) => ({
            name: item.name,
            value: item.value,
            disabled: !filterPizzaByType.find((pizza) => Number(pizza.size) === Number(item.value)),
        }));
        return avaliablePizzaSizes;
}