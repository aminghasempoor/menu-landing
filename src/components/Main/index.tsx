import FeatureBlock from "@/components/Main/FeatureBlock";
import { features } from "@/components/Main/FeatureBlockItems";

const Main = () => {
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
