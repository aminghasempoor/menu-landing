"use client";
import {useDeviceStore} from "@/stores/useDeviceStore";
import dynamic from "next/dynamic";

const BlogMobile = dynamic(() => import("./Mobile"), { ssr: false });
const BlogDesktop = dynamic(() => import("./Desktop"), { ssr: false });

export default function BlogComponent(){
    const isMobile = useDeviceStore((state) => state.isMobile);
    return isMobile ? <BlogMobile /> : <BlogDesktop />;
}