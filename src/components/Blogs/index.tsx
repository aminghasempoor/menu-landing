"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import BlogCard1 from "&/images/blogCover.jpg";
import BlogCard2 from "&/images/blogCover2.jpg";
import BlogCard3 from "&/images/blogCover3.jpg";
import BlogCard from "./BlogCard";

const blogs = [
    { image: BlogCard1, title: "چطور یک کافه‌ی کوچک محبوب آخر هفته‌ها شویم؟" },
    { image: BlogCard2, title: "ترندهای طراحی داخلی کافه‌ها در سال ۱۴۰۴" },
    { image: BlogCard3, title: "قیمت‌گذاری هوشمند در منو: منجر به سودآوری بیشتر" },
];

const Blogs = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: "end",
        direction: "rtl",
    });

    return (
        <div className="pt-8 mt-16 px-4 md:px-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                {/* ستون متن */}
                <div className="flex flex-col items-center md:items-end md:w-1/3">
                    <h2 className="text-lg lg:text-2xl font-bold text-foreground leading-relaxed mb-6 text-center md:text-right">
                        در بلاگ <span className="text-primary">منولیتا</span> بخوانید...
                    </h2>
                    <button className="flex w-fit items-center gap-2 px-3 py-2 border border-foreground rounded-lg text-sm hover:bg-muted transition">
                        ← مشاهده همه مقالات
                    </button>
                </div>

                {/* ستون کارت‌ها (Carousel) */}
                <div className="md:w-2/3 w-full" dir={"rtl"}>
                    <div className="overflow-hidden" ref={emblaRef} dir={"rtl"}>
                        <div className="flex gap-4" dir={"rtl"}>
                            {blogs.map((blog, i) => (
                                <div
                                    key={i}
                                    className="flex-[0_0_auto] w-[320px] h-[400px]"
                                >
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
