import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/utils/theme-provider";
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import DeviceProvider from "@/providers/DeviceProvider";

export const metadata: Metadata = {
    title: {
        template: "%s | منولیتا",
        default: "منولیتا",
    },
};

interface LocaleLayoutProps {
    params: Promise<{
        locale: string;
    }>;
    children: React.ReactNode;
}

export default async function RootLayout(props: LocaleLayoutProps) {
    const { locale } = await props.params;
    let isRtl;
    try {
        isRtl = locale === "fa";
    } catch (e) {
        console.log(e);
        notFound();
    }
    return (
        <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
            <body>
                <NextIntlClientProvider>
                    <DeviceProvider>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="light"
                            enableSystem
                            disableTransitionOnChange
                            value={{
                                light: "light",
                                dark: "dark",
                            }}
                        >
                            {props.children}
                        </ThemeProvider>
                    </DeviceProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
