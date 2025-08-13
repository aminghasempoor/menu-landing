"use client";
import React from "react";
import BentoBox1 from "&/images/consultant.jpg";
import BentoBox2 from "&/images/bentobox-04.jpg";
import BentoBox3 from "&/images/bentobox-01.jpg";
import BentoBox4 from "&/images/bentobox-03.jpg";
import { LayoutGrid } from "../ui/layout-grid";
import { useTranslations } from "next-intl";

export function LayoutGridDemo() {
    return (
        <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    const t = useTranslations("Capabilities");
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">{t("title")}</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{t("description")}</p>
        </div>
    );
};

const SkeletonTwo = () => {
    const t = useTranslations("Capabilities");
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">{t("title")}</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{t("description")}</p>
        </div>
    );
};
const SkeletonThree = () => {
    const t = useTranslations("Capabilities");
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">{t("title")}</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{t("description")}</p>
        </div>
    );
};
const SkeletonFour = () => {
    const t = useTranslations("Capabilities");
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">{t("title")}</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{t("description")}</p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-3",
        thumbnail: BentoBox1,
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: BentoBox2,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: BentoBox3,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-1",
        thumbnail: BentoBox4,
    },
];
