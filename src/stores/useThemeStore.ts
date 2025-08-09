import { create } from "zustand";

export type AppTheme = "light" | "dark";

interface ThemeStore {
    theme: AppTheme;
    setTheme: (theme: AppTheme) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: "light",
    setTheme: (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        set({ theme });
    },
    toggleTheme: () =>
        set((state) => {
            const next = state.theme === "light" ? "dark" : "light";
            document.documentElement.setAttribute("data-theme", next);
            localStorage.setItem("theme", next);
            return { theme: next };
        }),
}));
