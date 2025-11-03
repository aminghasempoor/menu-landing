"use client";
import { useTranslations } from "next-intl";
import SimplePicture from "./SimplePicture";
import backGround from "&/images/consultant.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const Consultation = () => {
    const t = useTranslations("Consultation");

    return (
        <>
            <SimplePicture />
            <div className="relative mb-16 w-[90vw] mx-auto h-[700px] p-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image className="object-cover rounded-xl" src={backGround} alt="background" fill priority />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 1.5 }}
                    className="absolute rounded-xl top-0 left-0 bg-gray-700 w-[90vw] mx-auto h-[700px]"
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:p-10 gap-x-16 text-white">
                    <motion.div
                        className="w-full md:w-1/2 mt-8 md:mt-0 text-center space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <h2 className="text-xl md:text-5xl font-bold">{t("titleLine1")}</h2>
                        <h2 className="text-xl md:text-5xl font-bold">{t("titleLine2")}</h2>
                        <p className="md:text-lg text-white/80">{t("subtitle")}</p>
                        <div className="grid grid-cols-2 gap-4 mt-6 text-sm justify-items-center">
                            <span className="bg-white/10 w-[90%] px-5 py-2 rounded-full shadow-2xl">
                                {t("support")}
                            </span>
                            <span className="bg-white/10 w-[90%] px-5 py-2 rounded-full">{t("customization")}</span>
                            <span className="bg-white/10 w-[90%] px-5 py-2 rounded-full">{t("noTech")}</span>
                            <span className="bg-white/10 w-[90%] px-5 py-2 rounded-full">{t("design")}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <input
                            type="text"
                            placeholder={t("name")}
                            className="w-full p-3 rounded border-b border-b-gray text-white placeholder-white/70 focus:outline-none my-3"
                        />
                        <input
                            type="text"
                            placeholder={t("phone")}
                            className="w-full p-3 rounded border-b border-b-gray text-white placeholder-white/70 focus:outline-none my-3"
                        />
                        <input
                            type="email"
                            placeholder={t("email")}
                            className="w-full p-3 rounded border-b border-b-gray text-white placeholder-white/70 focus:outline-none my-3"
                        />
                        <button className="w-full p-3 rounded-xl bg-white text-black font-medium my-3">
                            {t("submit")}
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Consultation;
