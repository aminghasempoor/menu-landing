"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SimplePricingContent from "@/components/mvpblocks/simple-pricing-content";

export default function SimplePricing() {
    const [frequency, setFrequency] = useState<string>("monthly");
    const [mounted, setMounted] = useState(false);
    const t = useTranslations("Plans");

    const plans = [
        {
            id: "special",
            name: t("special.name"),
            icon: Star,
            price: { monthly: 1.4, yearly: 17 },
            description: t("special.description"),
            features: t.raw("special.features"),
            cta: t("special.cta"),
            popular: true,
        },
        {
            id: "professional",
            name: t("professional.name"),
            icon: Zap,
            price: { monthly: 0.9, yearly: 11 },
            description: t("professional.description"),
            features: t.raw("professional.features"),
            cta: t("professional.cta"),
        },
        {
            id: "basic",
            name: t("basic.name"),
            icon: Shield,
            price: { monthly: 0.5, yearly: 0.5 * 12 },
            description: t("basic.description"),
            features: t.raw("basic.features"),
            cta: t("basic.cta"),
        },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
                <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
                <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center space-y-2">
                    <Badge
                        variant="outline"
                        className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1 text-sm font-medium"
                    >
                        <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
                        {t("title")}
                    </Badge>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="from-foreground to-foreground/30 bg-gradient-to-b py-2 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
                    >
                        {t("description")}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-muted-foreground max-w-md pt-2 text-lg"
                    >
                        {t("info")}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <Tabs
                        defaultValue={frequency}
                        onValueChange={setFrequency}
                        className="bg-muted/30 inline-block rounded-full p-1 shadow-sm"
                    >
                        <TabsList className="bg-transparent">
                            <TabsTrigger
                                value="monthly"
                                className="data-[state=active]:bg-background cursor-pointer rounded-full transition-all duration-300 data-[state=active]:shadow-sm"
                            >
                                {t("monthly")}
                            </TabsTrigger>
                            <TabsTrigger
                                value="yearly"
                                className="data-[state=active]:bg-background cursor-pointer rounded-full transition-all duration-300 data-[state=active]:shadow-sm"
                            >
                                {t("yearly")}
                                <Badge
                                    variant="secondary"
                                    className="bg-primary/10 text-primary hover:bg-primary/15 ml-2"
                                >
                                    {t("off")}
                                </Badge>
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </motion.div>

                <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <SimplePricingContent plan={plan} key={index} index={index} frequency={frequency} />
                    ))}
                </div>
            </div>
        </div>
    );
}
