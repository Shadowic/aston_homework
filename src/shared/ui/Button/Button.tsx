import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from "./Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'Primary' | 'Secondary' | 'Outline';
    size?: 'Small' | 'Medium' | 'Large';
}

export const Button = ({
               children,
               variant = 'Primary',
               size = 'Medium',
               className = '',
               ...props
           }: ButtonProps) => {

    const buttonClasses = [
        styles.btn,
        styles[`btn${variant}`],
        styles[`btn${size}`],
        className
    ].filter(cls => cls).join(' ');

    return (
        <button
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    );
};
