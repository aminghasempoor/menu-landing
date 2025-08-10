export type Menu = {
    title: string;
    href?: string;
    children?: Menu[];
};
export const menuItems: Menu[] = [
    { title: "صفحه خانه", href: "/" },
    { title: "وبلاگ", href: "#" },
    {
        title: "راه ارتباطی",
        children: [
            { title: "تلگرام", href: "#" },
            { title: "لینکدین", href: "#" },
            { title: "اینستا", href: "#" },
        ],
    },
    { title: "برنامه ها" },
    {
        title: "اخبار",
        children: [
            { title: "اقتصادی", href: "#" },
            { title: "ویژه", href: "#" },
            { title: "بین‌الملل", href: "#" },
        ],
    },
    { title: "درباره ما", href: "#" },
];
