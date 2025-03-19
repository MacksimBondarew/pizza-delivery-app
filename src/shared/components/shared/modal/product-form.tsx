"use client"

import { useCartStore } from "@/shared/store/cart";
import React from "react";
import { ProductWithRelations } from "../../../../../@types/prisma";
import toast from "react-hot-toast";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
    className?: string;
    onSubmit?: VoidFunction;
    product: ProductWithRelations;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
    const state = useCartStore((state) => state);
    const isPizzaForm = Boolean(product.items[0]?.pizzaType);
    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemid = productItemId ?? product.items[0].id;
            await state.addCartItem({
                productItemId: itemid,
                ingredients,
            });
            toast.success(product.name + " added successfully");
            _onSubmit?.();
        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
    };

    return (
        <>
            {isPizzaForm ? (
                <ChoosePizzaForm
                    imageUrl={product.imageUrl}
                    items={product.items}
                    name={product.name}
                    loading={state.loading}
                    ingredients={product.ingredients}
                    onSubmit={onSubmit}
                />
            ) : (
                <ChooseProductForm
                    imageUrl={product.imageUrl}
                    name={product.name}
                    loading={state.loading}
                    onSubmit={onSubmit}
                    price={product.items[0].price}
                />
            )}
        </>
    );
};
