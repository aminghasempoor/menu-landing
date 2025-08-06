"use client";
import SidePanel from "@/components/SidePanel";
import useSidePanelStore from "@/stores/sidePanelStore";
import { MenuIcon } from "@/assets";
import { useTranslations } from "next-intl";

const NavBar = () => {
    const t = useTranslations("NavBar");
    const openPanel = useSidePanelStore((state) => state.openPanel);

    return (
        <>
            <nav className="flex items-center justify-between p-4 md:mx-10 relative">
                <h3 className="scroll-m-20 capitalize text-xl tracking-tight lg:text-4xl align-baseline">
                    {t("title")}
                    <small className={"text-orange-200"}>.</small>
                </h3>
                <button onClick={openPanel} className="text-primary hover:text-foreground transition-colors">
                    <MenuIcon className="w-6 h-6" />
                </button>
            </nav>
            <SidePanel />
        </>
    );
};

export default NavBar;
