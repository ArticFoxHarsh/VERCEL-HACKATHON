import React from 'react';

const DailyChallenge: React.FC = () => {
    const handleClaimXP = () => {
        // Mock function to increment user's XP
        console.log("XP claimed!");
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">Daily Challenge</h2>
            <p className="mt-2">Skip unnecessary purchase, invest ₹100.</p>
            <p className="mt-2 font-bold">Reward: +100 XP</p>
            <button 
                onClick={handleClaimXP} 
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Completed! Claim XP.
            </button>
        </div>
    );
};

export default DailyChallenge;