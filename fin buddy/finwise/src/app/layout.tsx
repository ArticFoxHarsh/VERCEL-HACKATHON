import React from 'react';
import '../globals.css';
import Header from '../components/Header';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default Layout;