"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/components/ui/sheet";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui";
import Link from "next/link";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { CartDrawerItem } from "./cart-drawer-item";
import Image from "next/image";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { useCart } from "@/shared/hooks/use-cart";

interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
    children,
}) => {
    const state = useCart();
    const [redirecting, setRedirecting] = React.useState<boolean>(false);
    const onClickCountButton = async (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        state.updateItemQuantity(id, newQuantity);
    };
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee]">
                <div
                    className={cn(
                        "flex flex-col h-full",
                        state.totalAmount <= 0 && "justify-center"
                    )}>
                    {state.totalAmount > 0 ? (
                        <>
                            <SheetHeader>
                                <SheetTitle>
                                    В корзине{" "}
                                    <span className="font-bold">
                                        {state.items.length} товара
                                    </span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="-mx-6 mt-5 overflow-auto flex-1">
                                {state.items.map((item) => (
                                    <div key={item.id} className="mb-2">
                                        <CartDrawerItem
                                            id={item.id}
                                            imageUrl={item.imageUrl}
                                            onClickCountButton={(type) =>
                                                onClickCountButton(
                                                    item.id,
                                                    item.quantity,
                                                    type
                                                )
                                            }
                                            details={getCartItemDetails(
                                                item.ingredients,
                                                item.pizzaType as PizzaType,
                                                item.pizzaSize as PizzaSize
                                            )}
                                            disabled={item.disabled}
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}
                                            onClickRemove={() =>
                                                state.removeCartItem(item.id)
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <SheetFooter className="-mx-6 bg-white p-8">
                                <div className="w-full">
                                    <div className="flex mb-4">
                                        <span className="flex flex-1 text-lg text-neutral-500">
                                            Итого
                                        </span>

                                        <span className="font-bold text-lg">
                                            {state.totalAmount} ₽
                                        </span>
                                    </div>

                                    <Link href="/checkout">
                                        <Button
                                            onClick={() => setRedirecting(true)}
                                            loading={redirecting}
                                            type="submit"
                                            className="w-full h-12 text-base">
                                            Оформить заказ
                                            <ArrowRight className="w-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center w-72 mx-auto">
                                <Image
                                    src="/assets/images/empty-box.png"
                                    alt="Empty cart"
                                    width={120}
                                    height={120}
                                />
                                <Title
                                    size="sm"
                                    text="Корзина пустая"
                                    className="text-center font-bold my-2"
                                />
                                <p className="text-center text-neutral-500 mb-5">
                                    Добавьте хотя бы одну пиццу, чтобы совершить
                                    заказ
                                </p>

                                <SheetClose>
                                    <Button
                                        className="w-56 h-12 text-base"
                                        size="lg">
                                        <ArrowLeft className="w-5 mr-2" />
                                        Вернуться назад
                                    </Button>
                                </SheetClose>
                            </div>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
