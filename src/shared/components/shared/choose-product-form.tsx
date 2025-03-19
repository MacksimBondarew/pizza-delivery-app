"use client";

import React from "react";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { Button } from "../ui";
import Image from "next/image";

interface Props {
    imageUrl: string;
    name: string;
    loading?: boolean;
    className?: string;
    onSubmit: VoidFunction;
    price: number;
}

export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,
    className,
    onSubmit,
    price,
    loading
}) => {

    return (
        <div className={cn(className, "flex flex-1")}>
            <div
                className={cn(
                    "flex items-center justify-center flex-1 relative w-full",
                    className
                )}>
                <Image
                    width={350}
                    height={350}
                    unoptimized
                    src={imageUrl}
                    alt="Logo"
                    className={cn(
                        "relative left-2 top-2 transition-all z-10 duration-300"
                    )}
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />
                <Button loading={loading} onClick={() => onSubmit()} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {price} ₽
                </Button>
            </div>
        </div>
    );
};
