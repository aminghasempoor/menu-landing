import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type SeparatorProps = {
    className?: HTMLAttributes<HTMLDivElement> | string | undefined;
};

export default function Separator({ className }: SeparatorProps) {
    return <div className={cn("w-full border-b border-text/25", className)} />;
}
