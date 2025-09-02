import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'Primary' | 'Secondary' | 'Outline';
    size?: 'Small' | 'Medium' | 'Large';
}

export const Button = ({
                           children,
                           variant = 'primary',
                           size = 'medium',
                           className = '',
                           ...props
                       }: ButtonProps) => {
    const baseClasses = `btn btn${variant} btn${size}`;
    const combinedClasses = `${baseClasses} ${className}`;

    return (
        <button
            className={combinedClasses}
            {...props}
        >
            {children}
        </button>
    );
};
