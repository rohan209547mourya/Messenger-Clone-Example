'use client';

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
    label: string;
    href: string;
    icon: any;
    onClick?: () => void;    
    active?: boolean;
}


const MobileItem: React.FC<MobileItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick,
    active
}) => {

    const handleClick = () => {
        if(onClick) return onClick();
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={clsx(`
                group
                flex
                gap-x-3
                text-sm
                leading-6
                font-samibold
                w-full
                justify-center
                p-4
                text-gray-500
                hover:text-black
                hover:bg-gray-100`,
                active && "bg-gray-100 text-black"

            )}
        >
            <Icon  className="h-6 w-6" fill={active ? "black" : '#6b7280'}/> 
        </Link>
    )
}

export default MobileItem