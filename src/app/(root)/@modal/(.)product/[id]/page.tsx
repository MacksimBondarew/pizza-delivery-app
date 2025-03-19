import { ChooseProductModal } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const paramId = await params;
    const idNumber = Number(paramId.id);

    if (isNaN(idNumber)) {
        return notFound();
    }

    const product = await prisma.product.findFirst({
        where: {
            id: idNumber,
        },
        include: {
            ingredients: true,
            items: true,
        },
    });

    if (!product) {
        return notFound();
    }

    return <ChooseProductModal product={product} />;
}
