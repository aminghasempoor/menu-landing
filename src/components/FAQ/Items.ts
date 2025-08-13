export interface FaqItem {
    id: string;
    category: "general" | "pricing" | "technical" | "support";
}

export const faqItems: FaqItem[] = [
    { id: "1", category: "general" },
    { id: "2", category: "general" },
    { id: "3", category: "technical" },
    { id: "4", category: "technical" },
    // { id: '7', category: 'general' },
    // { id: '8', category: 'support' }
];

export const categories = [
    { id: "all", labelKey: "categories.all" },
    { id: "general", labelKey: "categories.general" },
    { id: "technical", labelKey: "categories.technical" },
    { id: "pricing", labelKey: "categories.pricing" },
    { id: "support", labelKey: "categories.support" },
];
