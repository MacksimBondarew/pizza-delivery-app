"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/shared/lib/utils";
import { ArrowUpDown, X } from "lucide-react";
import { Button } from "../ui";
import { Filters } from "./filters"; // Import Filters component

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isFilterOpen]);

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
                className
            )}>
            <Button
                variant="outline"
                className="mr-3 xl:hidden"
                onClick={() => setIsFilterOpen((prevState) => !prevState)}>
                Filter
            </Button>

            <ArrowUpDown size={16} />
            <b>Сортировка</b>
            <b className="text-primary">популярное</b>
            {isFilterOpen && (
                <div className="absolute top-[-105%]  sm:top-[-126%] left-0 right-0 z-20 bg-white p-5 rounded-lg shadow-lg">
                    <div className="overflow-y-auto overflow-x-hidden scrollbar max-h-[100vh] xl:max-h-full">
                        <button onClick={() => setIsFilterOpen(false)} className="absolute top-4 right-9"><X /></button>
                        <Filters className="w-full pb-4" />
                    </div>
                </div>
            )}
        </div>
    );
};
