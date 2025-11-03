"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard1 from "&/images/blogCover.jpg";
import BlogCard2 from "&/images/blogCover2.jpg";
import BlogCard3 from "&/images/blogCover3.jpg";
import BlogCard from "./BlogCard";
import {useTranslations} from "next-intl";


const Blogs = () => {
    const t = useTranslations("Blogs")
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: "end",
        direction: "rtl",
    });

    const blogs = [
        { image: BlogCard1, title: t("title1") },
        { image: BlogCard2, title: t("title2") },
        { image: BlogCard3, title: t("title3") },
    ];
    return (
        <div className="pt-8 mt-16 px-4 md:px-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                {/* ستون متن */}
                <div className="flex flex-col items-center md:items-end md:w-1/3">
                    <h2 className="text-lg lg:text-2xl font-bold text-foreground leading-relaxed mb-6 text-center md:text-right">
                        {t.rich("sectionTitle", {
                            highlight: (chunks) => <span className="text-primary">{chunks}</span>,
                        })}
                    </h2>

                    <button className="flex w-fit items-center gap-2 px-3 py-2 border border-foreground rounded-lg text-sm hover:bg-muted transition">
                        {t("buttonText")}
                    </button>
                </div>

                {/* ستون کارت‌ها (Carousel) */}
                <div className="md:w-2/3 w-full" dir={"rtl"}>
                    <div className="overflow-hidden" ref={emblaRef} dir={"rtl"}>
                        <div className="flex gap-4" dir={"rtl"}>
                            {blogs.map((blog, i) => (
                                <div key={i} className="flex-[0_0_auto] w-[320px] h-[400px]">
                                    <BlogCard image={blog.image} title={blog.title} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
