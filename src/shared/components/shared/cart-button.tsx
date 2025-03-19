"use client";

import { cn } from "@/shared/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "../ui";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store/cart";

interface Props {
    className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
    const state = useCartStore((state) => state);
    return (
        <CartDrawer>
            <Button disabled={state.loading} className={cn('group relative', { 'w-[105px]':state.loading }, className)}>
                <b>{state.totalAmount} $</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart
                        size={16}
                        className="relative"
                        strokeWidth={2}
                    />
                    <b>{state.items.length}</b>
                </div>
                <ArrowRight
                    size={20}
                    className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                />
            </Button>
        </CartDrawer>
    );
};
