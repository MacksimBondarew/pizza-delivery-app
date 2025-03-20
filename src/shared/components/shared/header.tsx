"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { CartButton, SearchInput } from "./index";
import Image from "next/image";
import Link from "next/link";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modal/auth-modal/auth-modal";

interface Props {
    className?: string;
    hasSearch?: boolean;
    hasCart?: boolean;
}

export const Header: React.FC<Props> = ({
    className,
    hasSearch = true,
    hasCart = true,
}) => {
    const [openAuthModal, setOpenAuthModal] = React.useState(false);
    return (
        <header className={cn("border border-b", className)}>
            <div className="flex container justify-center gap-4 px-3 mx-auto flex-wrap items-center sm:justify-between py-8">
                {/* left part */}
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={35}
                            height={35}
                        />
                        <div>
                            <h1 className="text-2xl uppercase font-black">
                                Next Pizza
                            </h1>
                            <p className="text-sm text-gray-400 leading-3">
                                вкусней уже некуда
                            </p>
                        </div>
                    </div>
                </Link>
                {hasSearch && (
                    <div className="order-1 basis-full mt-5 lg:order-none lg:basis-auto lg:mt-0 flex-1">
                        <SearchInput />
                    </div>
                )}
                {/* right part */}
                <div className="flex items-center gap-3">
                    <AuthModal
                        open={openAuthModal}
                        onClose={() => setOpenAuthModal(false)}
                    />
                    <ProfileButton
                        onClickSignIn={() => setOpenAuthModal(true)}
                    />
                    {hasCart && (
                        <div>
                            <CartButton />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
