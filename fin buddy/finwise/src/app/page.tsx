import React from 'react';

const HomePage: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-4">Welcome to FinWise</h1>
            <p className="text-lg text-center mb-8">
                Your gamified financial mentor to help you manage your finances effectively!
            </p>
            <a href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Go to Dashboard
            </a>
            <a href="/mentor" className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Chat with FinBuddy
            </a>
        </main>
    );
};

export default HomePage;