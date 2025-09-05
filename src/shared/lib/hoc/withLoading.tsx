import { FC } from 'react';

export const withLoading = (Component: FC) => {
    const WithLoading: FC<{ isLoading?: boolean }> = ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    fontSize: '18px',
                    color: '#666'
                }}>
                    Загрузка...
                </div>
            );
        }

        return <Component {...props} />;
    };

    return WithLoading;
};
