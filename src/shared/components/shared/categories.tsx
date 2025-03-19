"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
    items: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ className, items }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div
            className={cn(
                "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
                className
            )}>
            {items.map((item, index) => (
                <a
                    href={`/#${item.name}`}
                    className={cn(
                        "flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === index + 1 &&
                            "bg-white shadow-md shadow-gray-200 text-primary"
                    )}
                    key={index}>
                    <button>{item.name}</button>
                </a>
            ))}
        </div>
    );
};
