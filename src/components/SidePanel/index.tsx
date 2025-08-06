"use client";
import { motion, AnimatePresence } from "framer-motion";
import useSidePanelStore from "@/stores/sidePanelStore";
import { SideBarComponent } from "@/components/SideBarItems";
import { menuItems } from "@/components/SideBarItems/SideBarContent";

const SidePanel = () => {
    const isOpen = useSidePanelStore((state) => state.isOpen);
    const closePanel = useSidePanelStore((state) => state.closePanel);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePanel}
                    />

                    <motion.aside
                        className="fixed right-0 top-0 bottom-0 w-72 bg-card shadow-lg z-50 p-4 overflow-y-auto"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <SideBarComponent items={menuItems} />
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

export default SidePanel;
