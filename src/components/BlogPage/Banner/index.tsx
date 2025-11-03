"use client";

import { useTranslations } from "next-intl";
import BackgroundPicture from "./BackgroundPicture";

const Banner = () => {
    const t = useTranslations("BlogPage.Banner");
    return (
        <section>
            <BackgroundPicture />
        </section>
    );
};

export default Banner;
