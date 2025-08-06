import Image, { StaticImageData } from "next/image";
import { easeOut, motion } from "framer-motion";

type FeatureBlockProps = {
    index: number;
    title: string;
    description: string;
    image: StaticImageData;
};

const FeatureBlock = ({ index, title, description, image }: FeatureBlockProps) => {
    const isEven = (index + 1) % 2 === 0;

    // وریانت‌ها برای container و children
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren",
                ease: easeOut,
                duration: 0.6,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className={`w-full flex flex-col md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
            } items-center justify-between gap-8 max-w-6xl mx-auto px-5`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div className="flex-1 text-center lg:text-right" variants={textVariants}>
                <h3 className="text-xl font-bold text-storm-dark">{title}</h3>
                <p className="mt-2 text-muted-foreground text-justify leading-relaxed text-sm sm:text-base">
                    {description}
                </p>
            </motion.div>

            <motion.div
                className={`flex-1 relative w-full max-w-sm overflow-hidden ${
                    isEven ? "rounded-tr-[80px]" : "rounded-tl-[80px]"
                }`}
                variants={imageVariants}
            >
                <Image
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    className="w-full h-auto mx-auto"
                    priority // برای لود سریع‌تر عکس‌ها
                />
            </motion.div>
        </motion.div>
    );
};

export default FeatureBlock;
