'use client'

import clsx from 'clsx'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    disabled?: boolean;
    danger?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    disabled,
    danger,
}) => {
  return (
    <button 
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(`
            flex
            justify-center
            py-2
            px-3
            text-sm
            font-samibold
            rounded-md
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2`,
            disabled && "opacity-50 cursor-not-allowed",
            fullWidth && "w-full",
            secondary ? "text-gray-900" : "text-white",
            danger && "bg-rose-500 hover:bg-rose-600 focus-visible:ring-rose-600",  
            !secondary && !danger && "bg-sky-600 hover:bg-sky-700 focus-visible:ring-sky-700",
        )}
    >
        {children}
    </button>
  )
}

export default Button