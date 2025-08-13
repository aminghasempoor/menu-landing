import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MinusIcon, PlusIcon } from "lucide-react";
import { categories, faqItems } from "@/components/FAQ/Items";
import { useTranslations } from "next-intl";

export default function Faq2() {
    const t = useTranslations("FAQ");
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filteredFaqs =
        activeCategory === "all" ? faqItems : faqItems.filter((item) => item.category === activeCategory);

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section className="bg-background pb-16">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-12 flex flex-col items-center">
                    <Badge
                        variant="outline"
                        className="border-primary mb-4 px-3 py-4 text-2xl font-medium tracking-wider uppercase"
                    >
                        {t("description")}
                    </Badge>
                    <p className="text-muted-foreground max-w-2xl text-center">{t("text")}</p>
                </div>

                <div className="mb-10 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                                activeCategory === category.id
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            )}
                        >
                            {t(category.labelKey)}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <AnimatePresence>
                        {filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={cn(
                                    "border-border h-fit overflow-hidden rounded-xl border",
                                    expandedId === faq.id ? "shadow-3xl bg-card/50" : "bg-card/50"
                                )}
                                style={{ minHeight: "88px" }}
                            >
                                <button
                                    onClick={() => toggleExpand(faq.id)}
                                    className="flex w-full items-center justify-between p-6 text-start"
                                >
                                    <h3 className="text-foreground text-lg font-medium">
                                        {t(`items.${faq.id}.question`)}
                                    </h3>
                                    <div className="ml-4 flex-shrink-0">
                                        {expandedId === faq.id ? (
                                            <MinusIcon className="text-primary h-5 w-5" />
                                        ) : (
                                            <PlusIcon className="text-primary h-5 w-5" />
                                        )}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedId === faq.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-border border-t px-6 pt-2 pb-6">
                                                <p className="text-muted-foreground">{t(`items.${faq.id}.answer`)}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-muted-foreground mb-4">{t("contactText")}</p>
                    <a
                        href="#"
                        className=" text-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 font-medium transition-colors"
                    >
                        {t("contactButton")}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
