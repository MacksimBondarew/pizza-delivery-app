import { Container } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ProductForm } from "@/shared/components/shared/modal/product-form";

type ProductPageProps = {
    params: {
        id: string;
    };
};

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number((await params).id) },
        include: {
            ingredients: true,
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },
            items: true,
        },
    });
    if (!product) {
        return notFound();
    }
    return (
        <Container className="flex flex-col my-10">
            <ProductForm product={product} />
        </Container>
    );
}
