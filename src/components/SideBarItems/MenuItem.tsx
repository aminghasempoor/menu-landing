import { ReactNode } from "react";
import Link from "next/link";

interface MenuItemProps {
    label: string;
    onClick?: () => void;
    icon?: ReactNode;
    href?: string;
}

export default function MenuItem({ label, onClick, icon, href }: MenuItemProps) {
    return (
        <Link
            href={href || "#"}
            onClick={onClick}
            className="w-full flex items-center justify-between text-sm font-bold py-2 px-2 rounded-md cursor-pointer"
        >
            <span className="flex items-center gap-2">
                {icon}
                <p className="line-clamp-1 text-text">{label}</p>
            </span>
        </Link>
    );
}
