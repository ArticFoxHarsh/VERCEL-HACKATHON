import React from 'react';

interface LevelProgressProps {
    level: number;
    xpPoints: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ level, xpPoints }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Current Level: {level}</h2>
            <p className="text-gray-600">XP Points: {xpPoints}</p>
            <div className="mt-2">
                <div className="bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(xpPoints / (level * 1500)) * 100}%` }}
                    />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                    Progress towards next level
                </p>
            </div>
        </div>
    );
};

export default LevelProgress;