"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

type BlogCardProps = {
    image: StaticImageData;
    title: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-background rounded-sm overflow-hidden shadow-md cursor-pointer flex flex-col relative "
        >
            <div className="w-full h-48 overflow-hidden relative">
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-tl-[100px]"
                />
                <p className="absolute bottom-0 right-0 bg-black/60 text-white text-sm font-medium px-2 py-1 rounded">
                    {title}
                </p>
            </div>
        </motion.div>
    );
};

export default BlogCard;
