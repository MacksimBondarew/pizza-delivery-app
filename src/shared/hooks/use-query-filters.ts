import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const isMounted = React.useRef(false);
    const router = useRouter();

    React.useEffect(() => {
        if (isMounted.current) {
            const params = {
                ...filters.prices,
                pizzaTypes:
                    filters.pizzaTypes.size > 0
                        ? Array.from(filters.pizzaTypes).join(",")
                        : undefined,
                sizes:
                    filters.sizes.size > 0
                        ? Array.from(filters.sizes).join(",")
                        : undefined,
                selectedIngredients:
                    filters.selectedIngredients.size > 0
                        ? Array.from(filters.selectedIngredients).join(",")
                        : undefined,
            };

            const query = qs.stringify(params, {
                encode: false, 
                skipNulls: true, 
            });

            router.push(`?${query}`, {
                scroll: false,
            });
        } else {
            isMounted.current = true;
        }
    }, [filters, router]);
};
