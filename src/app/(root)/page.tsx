import {
    Container,
    Filters,
    ProductsGroupList,
    TopBar,
} from "@/shared/components/shared";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizzas";
import { Stories } from "@/shared/components/shared/stories";
import { cn } from "@/shared/lib/utils";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<GetSearchParams>;
}) {
    const categories = await findPizzas(await searchParams);
    const hasProducts = categories.some(
        (category) => category.products.length > 0
    );
    return (
        <>
            <TopBar
                categories={categories.filter(
                    (category) => category.products.length > 0
                )}
            />
            <Stories />
            <Container className="pt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/* Filter */}
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters />
                        </Suspense>
                    </div>
                    {/* Products list */}
                    <div className="flex-1 gap-8 flex flex-wrap">
                        <div
                            className={cn("flex flex-col gap-16", {
                                "flex-row justify-center w-full": !hasProducts,
                            })}>
                            {hasProducts ? (
                                categories.map(
                                    (category) =>
                                        category.products.length > 0 && (
                                            <ProductsGroupList
                                                categoryId={category.id}
                                                title={category.name}
                                                key={category.name}
                                                items={category.products}
                                            />
                                        )
                                )
                            ) : (
                                <p className="text-2xl text-center font-bold">
                                    {" "}
                                    Ничего не найдено
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
