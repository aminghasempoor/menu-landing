import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "fa"] as const, // به صورت readonly تعریف می‌کنیم
    defaultLocale: "fa",
});
