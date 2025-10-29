import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">FinWise</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/dashboard" className="hover:underline">Dashboard</a>
                        </li>
                        <li>
                            <a href="/mentor" className="hover:underline">Mentor</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;