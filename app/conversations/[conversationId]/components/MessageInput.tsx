'use client'

import {  FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface MessageInputProps {
    id: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const MessageInput: React.FC<MessageInputProps> = ({
    id, placeholder, required, type, register, errors
}) => {
    return (
        <div  className="relative w-full">
            <input 
                type={type} 
                id={id}
                autoComplete={id}
                {...register(id, { required })}
                placeholder={placeholder}
                className="
                    text-black
                    font-light
                    py-2
                    px-4
                    bg-neutral-100
                    w-full
                    rounded-full
                    hover:outline-none
                "
            />
        </div>
    )
}

export default MessageInput