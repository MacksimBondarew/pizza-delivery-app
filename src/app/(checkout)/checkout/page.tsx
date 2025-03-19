"use client";

import { Title, WhiteBlock } from "@/shared/components/shared";
import { CheckoutCart } from "@/shared/components/shared/checkout/checkout-cart";
import { CheckoutSidebar } from "@/shared/components/shared/checkout-sidebar";
import {
    checkoutFormSchema,
    CheckoutFormValues,
} from "@/shared/constants/checkout-form-schema";
import { useCart } from "@/shared/hooks/use-cart";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CheckoutPersonalForm } from "@/shared/components/shared/checkout/checkout-personal-form";
import { CheckoutAddressForm } from "@/shared/components/shared/checkout/checkout-adress-form";
import { createOrder } from "@/app/actions";
import { Api } from "@/shared/services/api-client";
import { useSession } from "next-auth/react";

export default function CheckOutPage() {
    const state = useCart();
    const [submitting, setSubmitting] = React.useState(false);
    const { data: session } = useSession();
    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            comment: "",
        },
    });

    React.useEffect(() => {
        async function fetchUserInfo() {
            const data = await Api.auth.getMe();
            const [firstName, lastName] = data.fullName.split(" ");

            form.setValue("firstName", firstName);
            form.setValue("lastName", lastName);
            form.setValue("email", data.email);
        }

        if (session) {
            fetchUserInfo();
        }
    }, [session]);

    const onClickCountButton = (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        state.updateItemQuantity(id, newQuantity);
    };

    const onSubmit = async (data: CheckoutFormValues) => {
        try {
            setSubmitting(true);

            const url = await createOrder(data);

            toast.error("Заказ успешно оформлен! 📝 Переход на оплату... ", {
                icon: "✅",
            });

            if (url) {
                location.href = url;
            }
        } catch (err) {
            console.log(err);
            setSubmitting(false);
            toast.error("Не удалось создать заказ", {
                icon: "❌",
            });
        }
    };

    return (
        <>
            <Title
                text="Оформление заказа"
                className="font-extrabold mb-8 text-[36px]"
            />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <CheckoutCart
                                onClickCountButton={onClickCountButton}
                                removeCartItem={state.removeCartItem}
                                items={state.items}
                                loading={state.loading}
                            />
                            <CheckoutPersonalForm
                                className={
                                    state.loading
                                        ? "opacity-40 pointer-events-none"
                                        : ""
                                }
                            />
                            <CheckoutAddressForm
                                className={
                                    state.loading
                                        ? "opacity-40 pointer-events-none"
                                        : ""
                                }
                            />
                        </div>

                        {/* Правая часть */}
                        <div className="w-[450px]">
                            <WhiteBlock>
                                <CheckoutSidebar
                                    totalAmount={state.totalAmount}
                                    loading={state.loading || submitting}
                                />
                            </WhiteBlock>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </>
    );
}
