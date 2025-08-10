import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
type Price = {
    monthly: number;
    yearly: number;
};

type Props = {
    id: string;
    name: string;
    icon: LucideIcon;
    price: Price;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
};

export default function SimplePricingContent({
    plan,
    index,
    frequency,
}: {
    plan: Props;
    index: number;
    frequency: string;
}) {
    const t = useTranslations("Plans");
    return (
        <>
            <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="flex"
            >
                <Card
                    className={cn(
                        "bg-secondary/20 relative h-full w-full text-left transition-all duration-300 hover:shadow-lg",
                        plan.popular
                            ? "ring-primary/50 dark:shadow-primary/10 shadow-md ring-2"
                            : "hover:border-primary/30",
                        plan.popular && "from-primary/[0.03] bg-gradient-to-b to-transparent"
                    )}
                >
                    {plan.popular && (
                        <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                            <Badge className="bg-primary text-primary-foreground rounded-full px-4 py-1 shadow-sm">
                                <Sparkles className="mr-1 h-3.5 w-3.5" />
                                {t("popular")}
                            </Badge>
                        </div>
                    )}
                    <CardHeader className={cn("pb-4", plan.popular && "pt-8")}>
                        <div className="flex items-center gap-2">
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full",
                                    plan.popular ? "bg-primary/10 text-primary" : "bg-secondary text-foreground"
                                )}
                            >
                                <plan.icon className="h-4 w-4" />
                            </div>
                            <CardTitle className={cn("text-xl font-bold", plan.popular && "text-primary")}>
                                {plan.name}
                            </CardTitle>
                        </div>
                        <CardDescription className="mt-3 space-y-2">
                            <p className="text-sm">{plan.description}</p>
                            <div className="pt-2">
                                {typeof plan.price[frequency as keyof typeof plan.price] === "number" ? (
                                    <div className="flex items-baseline">
                                        <NumberFlow
                                            className={cn(
                                                "text-3xl font-bold",
                                                plan.popular ? "text-primary" : "text-foreground"
                                            )}
                                            value={plan.price[frequency as keyof typeof plan.price] as number}
                                        />
                                        <span className="text-muted-foreground px-2 ml-1 text-sm">{t("unit")}</span>
                                    </div>
                                ) : (
                                    <span
                                        className={cn(
                                            "text-2xl font-bold",
                                            plan.popular ? "text-primary" : "text-foreground"
                                        )}
                                    >
                                        {plan.price[frequency as keyof typeof plan.price]}
                                    </span>
                                )}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-3 pb-6">
                        {plan.features.map((feature: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                className="flex items-center gap-2 text-sm"
                            >
                                <div
                                    className={cn(
                                        "flex h-5 w-5 items-center justify-center rounded-full",
                                        plan.popular
                                            ? "bg-primary/10 text-primary"
                                            : "bg-secondary text-secondary-foreground"
                                    )}
                                >
                                    <Check className="h-3.5 w-3.5" />
                                </div>
                                <span className={plan.popular ? "text-foreground" : "text-muted-foreground"}>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </CardContent>
                    <CardFooter>
                        <Button
                            variant={plan.popular ? "default" : "outline"}
                            className={cn(
                                "w-full font-medium transition-all duration-300",
                                plan.popular
                                    ? "bg-primary hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-md"
                                    : "hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                            )}
                        >
                            {plan.cta}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </CardFooter>

                    {plan.popular ? (
                        <>
                            <div className="from-primary/[0.05] pointer-events-none absolute right-0 bottom-0 left-0 h-1/2 rounded-b-lg bg-gradient-to-t to-transparent" />
                            <div className="border-primary/20 pointer-events-none absolute inset-0 rounded-lg border" />
                        </>
                    ) : (
                        <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    )}
                </Card>
            </motion.div>
        </>
    );
}
