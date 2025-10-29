import React, { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';

const MentorPage: React.FC = () => {
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Logic to handle chat submission will go here
        setUserInput('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">FinBuddy - Your AI Mentor</h1>
            <ChatInterface 
                userInput={userInput} 
                onInputChange={handleInputChange} 
                onSubmit={handleSubmit} 
            />
        </div>
    );
};

export default MentorPage;