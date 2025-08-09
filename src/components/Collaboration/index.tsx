"use client";

import { Chat, Pencill, Security } from "@/assets";
import CollaborationCard from "./CollaborationCard";
import { useTranslations } from "next-intl";
import { easeOut, motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeOut },
    },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
    },
};

const Collaboration = () => {
    const t = useTranslations("Collaboration");

    const steps = [
        {
            title: t("step1Title"),
            description: t("step1Desc"),
            icon: Pencill,
        },
        {
            title: t("step2Title"),
            description: t("step2Desc"),
            icon: Chat,
        },
        {
            title: t("step3Title"),
            description: t("step3Desc"),
            icon: Security,
        },
    ];

    return (
        <motion.section
            className="py-10 bg-gray-50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">
                    {t("description")} <span className="text-orange-200">{t("title")}</span>
                </h2>

                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <CollaborationCard title={step.title} description={step.description} Icon={step.icon} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Collaboration;
