"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import IphoneLight from "&/images/iPhone15.png";
import IphoneDark from "&/images/iPhone15dark.png";
import { useTranslations } from "next-intl";

const Banner = () => {
    const t = useTranslations("Banner");
    return (
        <section className="relative w-full bg-background pt-20 pb-10 px-4 md:px-16 flex flex-col items-center overflow-hidden">
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between w-full max-w-6xl gap-10">
                {/* گوشی‌ها */}
                <motion.div
                    className="flex-1 flex justify-around relative"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="w-50 sm:w-52 md:w-60 lg:w-64 relative z-10"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image src={IphoneLight} alt="گوشی سفید" className="w-full h-auto" />
                    </motion.div>
                    <motion.div
                        className="w-50 sm:w-52 md:w-60 lg:w-80 absolute left-10 md:left-20 lg:left-28 top-20 -z-0 rotate-[-8deg] opacity-80"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 0.8 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image src={IphoneDark} alt="گوشی مشکی" className="w-full h-auto" />
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex-1 text-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-storm-dark">
                        {t("digital_menu")}{" "}
                        <span className="relative inline-block text-storm-dark">
                            {t("menulita")}
                            <span className="absolute -top-2 -left-3 w-full h-full bg-[#f1eee9] rounded-full -z-10 rotate-3 px-1 py-0.5"></span>
                        </span>
                        <br />
                        {t("simple")}
                    </h1>
                    <p className="mt-4 text-sm sm:text-base">{t("customer")}</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-storm-dark bg-[#575F4D] text-white rounded-md text-sm sm:text-base hover:bg-storm-dark/90 transition"
                    >
                        {t("consultant")}
                    </motion.button>
                </motion.div>
            </div>

            {/* فلش اسکرول به پایین */}
            <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            >
                <ChevronDown className="size-6 text-foreground" />
            </motion.div>
        </section>
    );
};

export default Banner;
