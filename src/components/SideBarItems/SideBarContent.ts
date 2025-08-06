export type Menu = {
    title: string;
    href?: string;
    children?: Menu[];
};
export const menuItems: Menu[] = [
    { title: "صفحه خانه", href: "/" },
    { title: "لیست تصاویر جاده‌ای", href: "/road-cameras" },
    {
        title: "راه و ترافیک",
        children: [
            { title: "دوربین‌ها", href: "#" },
            { title: "نقشه ترافیکی", href: "#" },
            { title: "وضعیت جاده‌ها", href: "#" },
        ],
    },
    { title: "کریدورهای اصلی" },
    {
        title: "اخبار",
        children: [
            { title: "داخلی", href: "#" },
            { title: "حوادث", href: "#" },
            { title: "بین‌الملل", href: "#" },
        ],
    },
    {
        title: "وبلاگ",
        children: [
            {
                title: "امین",
                children: [
                    { title: "مقالات", href: "#" },
                    { title: "آموزش‌ها", href: "#" },
                ],
            },
            { title: "آموزش‌ها", href: "#" },
        ],
    },
    { title: "درباره ۱۴۱", href: "#" },
    { title: "شکایات", href: "#" },
];
