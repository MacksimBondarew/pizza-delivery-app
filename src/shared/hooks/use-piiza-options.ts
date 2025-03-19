import React from "react";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "../lib/get-available-pizza-sizes";
import { ProductItem } from "@prisma/client";
import { Variant } from "../components/shared/group-variants";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    selectedIngridients: Set<number>;
    toggleIngredients: (id: number) => void;
    avaliableSizes: Variant[];
    currentItemId?: number;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);
    const [selectedIngridients, { toggle: toggleIngredients }] = useSet(
        new Set<number>([])
    );
    const avaliableSizes = getAvailablePizzaSizes(type, items);
    const currentItemId = items.find(item => item.pizzaType === type && item.size === size)?.id;

    React.useEffect(() => {
        const isAvailableSize = avaliableSizes?.find(
            (item) => Number(item.value) === size
        );
        const avaliableSize = avaliableSizes?.find((item) => !item.disabled);
        if (!isAvailableSize && avaliableSize) {
            setSize(Number(avaliableSize.value) as PizzaSize);
        }
    }, [type]);
    return {
        size,
        type,
        setSize,
        setType,
        selectedIngridients,
        toggleIngredients,
        avaliableSizes,
        currentItemId
    };
};
