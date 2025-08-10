"use client";
import dynamic from "next/dynamic";
import { useDeviceStore } from "@/stores/useDeviceStore";

const HomeMobile = dynamic(() => import("./Mobile"), { ssr: false });
const HomeDesktop = dynamic(() => import("./Desktop"), { ssr: false });
const FirstPage = () => {
    const isMobile = useDeviceStore((state) => state.isMobile);
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
};
export default FirstPage;
