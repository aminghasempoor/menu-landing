"use client";
import BannerImage from "&/images/Video.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SimplePicture = () => {
    const t = useTranslations("Consultation");

    return (
        <div className="relative flex items-center justify-center w-full mb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Image src={BannerImage} alt="Banner Image" width={500} height={500} className="rounded-lg" />
            </motion.div>

            <motion.p
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-bold text-secondary-foreground drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {t("title")}
            </motion.p>
        </div>
    );
};

export default SimplePicture;
