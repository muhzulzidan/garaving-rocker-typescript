import React from 'react';
import Header from './header'; // Adjust the path as necessary

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;