"use client";
import { motion } from "framer-motion";
import { StarColor } from "@/assets";
import {LayoutGridDemo} from "@/components/Capability/ImagesItemContent";

const CapabilitiesShowcase = () => {

    return (
        <section className="py-16 px-4 relative">
            <div className="max-w-7xl mx-auto relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <StarColor className="size-48 md:size-64 opacity-50" />
                </div>
                <motion.div
                    className="text-center mb-12 relative z-10"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
                        قابلیت‌های فود هات و کافه نان
                    </h2>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto text-gray-600">
                        تجربه‌ای بی‌نظیر و پیشرفته
                    </p>
                </motion.div>
                <LayoutGridDemo />
            </div>
        </section>
    );
};

export default CapabilitiesShowcase;
