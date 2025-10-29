import React, { useState } from 'react';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatInterface: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Call the API route
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            const botMessage: Message = { text: data.response, sender: 'bot' };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = { 
                text: 'Sorry, something went wrong. Please try again.', 
                sender: 'bot' 
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSend();
        }
    };

    const handleVoiceInput = () => {
        // Mock voice input function
        alert('Voice input feature coming soon!');
    };

    return (
        <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-white border rounded-lg shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold">FinBuddy - Your AI Mentor</h2>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">
                        <p>Ask me anything about finance!</p>
                    </div>
                )}
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <span 
                            className={`inline-block max-w-[70%] p-3 rounded-lg ${
                                msg.sender === 'user' 
                                    ? 'bg-blue-500 text-white rounded-br-none' 
                                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                            }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <span className="inline-block p-3 rounded-lg bg-gray-200 text-gray-800">
                            Typing...
                        </span>
                    </div>
                )}
            </div>
            
            <div className="p-4 border-t">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ask me anything..."
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleVoiceInput}
                        className="p-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                        title="Voice Input (Coming Soon)"
                    >
                        🎤
                    </button>
                    <button 
                        onClick={handleSend} 
                        disabled={isLoading}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;