"use client";

import {easeOut, motion} from "framer-motion";
import { StarColor } from "@/assets";
import { LayoutGridDemo } from "@/components/Capability/ImagesItemContent";
import { useTranslations } from "next-intl";

const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};


const CapabilitiesShowcase = () => {
    const t = useTranslations("Capabilities");

    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-7xl mx-auto relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <StarColor className="size-48 md:size-64 opacity-50" />
                </div>

                <motion.div
                    className="text-center mb-12 relative z-10"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
                        {t("title")}
                    </h2>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto text-foreground">
                        {t("description")}
                    </p>
                </motion.div>

                <motion.div
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <LayoutGridDemo />
                </motion.div>
            </div>
        </section>
    );
};

export default CapabilitiesShowcase;
