import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface SubMenuProps {
    label: string;
    children: ReactNode;
}

export default function SubMenu({ label, children }: SubMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex items-center justify-between text-sm font-bold py-2 px-2 hover:bg-accent/25 rounded-md cursor-pointer"
            >
                <span className="line-clamp-1 text-text">{label}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    // TODO: update theme colors
                    className={"p-1 rounded-lg"}
                >
                    <ChevronDown />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 pr-3"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
