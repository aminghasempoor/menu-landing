"use client";
import SidePanel from "@/components/SidePanel";
import useSidePanelStore from "@/stores/sidePanelStore";
import { MenuIcon } from "@/assets";
import { useTranslations } from "next-intl";
import ThemeToggle from "@/components/NavBar/ThemeToggle";

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
                <div className={"flex items-center justify-center gap-x-4"}>
                    <ThemeToggle />
                    <button onClick={openPanel} className="text-foreground hover:text-foreground transition-colors">
                        <MenuIcon className="w-4 h-4 text-foreground" />
                    </button>
                </div>
            </nav>
            <SidePanel />
        </>
    );
};

export default NavBar;
