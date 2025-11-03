import FeatureBlock from "@/components/Main/FeatureBlock";
import {useTranslations} from "next-intl";
import FeatureOne from "&/images/descriptionImg.png";
import FeatureTwo from "&/images/descriptionImg1.png";
import FeatureThree from "&/images/descriptionImg 2.png";

const Main = () => {
    const t = useTranslations("Main")

    const features = [
        {
            title: t("title1"),
            description: t("description1"),
            image: FeatureOne,
        },
        {
            title: t("title2"),
            description: t("description2"),
            image: FeatureTwo,
        },
        {
            title: t("title3"),
            description: t("description3"),
            image: FeatureThree,
        },
    ];

    return (
        <>
            <section className="py-10 px-4 space-y-20">
                {features.map((feature, index) => (
                    <FeatureBlock key={index} index={index} {...feature} />
                ))}
            </section>
        </>
    );
};
export default Main;
