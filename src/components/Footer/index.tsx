import React from "react";
import { useTranslations } from "next-intl";
import { Mail, PhoneIcon } from "lucide-react";
import { Instagram, Linkdin, Telegram, Twiter } from "@/assets";
import Image from "next/image";
import backGround from "&/images/footer.png";
import { motion } from "framer-motion";

const Footer: React.FunctionComponent = () => {
    const t = useTranslations("Footer");

    return (
        <div className="relative bg-card w-[90vw] mx-auto rounded-xl my-6 overflow-hidden">
            {/* بک‌گراند */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute bottom-0 z-0 left-0"
            >
                <Image
                    src={backGround}
                    alt="background"
                    width={150}
                    height={150}
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* لایه متن‌ها */}
            <div className="relative z-10">
                {/* بخش بالا */}
                <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between p-5 space-y-5 border-b border-b-gray-200 mx-3">
                    <h3 className="scroll-m-20 capitalize text-3xl font-bold tracking-tight lg:text-4xl">
                        {t("title")}
                        <small className="text-orange-200">.</small>
                    </h3>
                    <span className="flex items-center justify-evenly md:justify-start gap-x-6 w-full">
                        <h3 className="scroll-m-20 capitalize text-lg tracking-tight lg:text-2xl">
                            {t("price")}
                        </h3>
                        <h3 className="scroll-m-20 capitalize text-lg tracking-tight lg:text-2xl">
                            {t("blog")}
                        </h3>
                        <h3 className="scroll-m-20 capitalize text-lg tracking-tight lg:text-2xl">
                            {t("about_us")}
                        </h3>
                    </span>
                </div>

                {/* بخش پایین */}
                <div className="flex flex-col justify-center items-center md:flex-row-reverse md:justify-between p-5 space-y-5 mx-3">
                    <span className="flex flex-col items-center md:items-end justify-evenly w-full">
                        <h3 className="flex items-center justify-center md:justify-end w-full gap-x-2">
                            09124512356
                            <PhoneIcon size={16} />
                        </h3>
                        <h3 className="flex items-center justify-center md:justify-end w-full gap-x-2">
                            Menulita@example.com
                            <Mail size={16} />
                        </h3>
                    </span>
                    <span className="flex items-center justify-center md:justify-start gap-x-6 w-full">
                        <Telegram />
                        <Instagram />
                        <Linkdin />
                        <Twiter />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
