"use client";

import React from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui";
import { GroupVariants, IngredientItem, ProductImage } from "./index";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import { usePizzaOptions } from "@/shared/hooks/use-piiza-options";
import { getPizzaDetails } from "@/shared/lib/get-pizza-details";

interface Props {
    imageUrl: string;
    name: string;
    items: ProductItem[];
    ingredients: Ingredient[];
    loading?: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void;
    className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
    name,
    imageUrl,
    className,
    ingredients,
    onSubmit,
    items,
    loading,
}) => {
    const {
        size,
        type,
        setSize,
        setType,
        selectedIngridients,
        toggleIngredients,
        avaliableSizes,
        currentItemId,
    } = usePizzaOptions(items);
    const { totalPrice, textDetaills } = getPizzaDetails(
        type,
        size,
        items,
        ingredients,
        selectedIngridients
    );
    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId, Array.from(selectedIngridients));
        }
    };
    return (
        <div className={cn(className, "flex flex-1")}>
            <div
                className={cn(
                    "flex items-center justify-center flex-1 relative w-full",
                    className
                )}>
                <ProductImage size={size} imageUrl={imageUrl} />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetaills}</p>
                <div className="flex flex-col gap-1 mt-4">
                    <GroupVariants
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                        items={avaliableSizes}
                    />
                    <GroupVariants
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                        items={pizzaTypes}
                    />
                </div>
                <div className="bg-gray-50 p-5 rounded-md h-[220px] overflow-auto scrollbar mt-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((ingredient) => (
                            <IngredientItem
                                key={ingredient.id}
                                name={ingredient.name}
                                price={ingredient.price}
                                imageUrl={ingredient.imageUrl}
                                onClick={() => toggleIngredients(ingredient.id)}
                                active={selectedIngridients.has(ingredient.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button loading={loading} onClick={handleClickAdd} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    );
};
