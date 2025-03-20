import React from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";

interface Props {
    categories: Category[];
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {
    return (
        <div
            className={cn(
                "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
                className
            )}>
            <div className="flex container px-3 justify-center mx-auto  flex-wrap items-center lg:justify-between">
                <Categories items={categories} />
                <SortPopup />
            </div>
        </div>
    );
};
