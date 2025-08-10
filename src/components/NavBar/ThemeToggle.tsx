import { useThemeStore } from "@/stores/useThemeStore";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const theme = useThemeStore((s) => s.theme);
    const toggleTheme = useThemeStore((s) => s.toggleTheme);

    function handleThemeToggle() {
        toggleTheme();
    }

    return (
        <AnimatePresence>
            <button onClick={handleThemeToggle} className="flex items-center py-2 cursor-pointer">
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {theme === "dark" ? (
                        <Moon className="md:size-4 lg:size-6 text-soft-white" />
                    ) : (
                        <Sun className="md:size-4 lg:size-6 text-slate-card" />
                    )}
                </motion.div>
            </button>
        </AnimatePresence>
    );
}
