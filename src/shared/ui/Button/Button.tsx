import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
}

export const Button = ({
                           children,
                           variant = 'primary',
                           size = 'medium',
                           className = '',
                           ...props
                       }: ButtonProps) => {
    const baseClasses = `btn btn-${variant} btn-${size}`;
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
