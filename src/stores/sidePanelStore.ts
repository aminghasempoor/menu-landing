import { create } from "zustand";

type SidePanelStore = {
    isOpen: boolean;
    openPanel: () => void;
    closePanel: () => void;
    togglePanel: () => void;
};

const useSidePanelStore = create<SidePanelStore>((set) => ({
    isOpen: false,
    openPanel: () => set({ isOpen: true }),
    closePanel: () => set({ isOpen: false }),
    togglePanel: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSidePanelStore;
