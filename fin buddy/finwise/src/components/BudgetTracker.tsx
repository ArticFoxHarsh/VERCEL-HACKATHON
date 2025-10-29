import React from 'react';

const BudgetTracker: React.FC<{ budgetLimit: number; spentAmount: number }> = ({ budgetLimit, spentAmount }) => {
    const remainingBudget = budgetLimit - spentAmount;
    const progressPercentage = Math.min((spentAmount / budgetLimit) * 100, 100);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Budget Tracker</h2>
            <div className="mt-4">
                <div className="flex justify-between">
                    <span>Monthly Budget Limit:</span>
                    <span>₹{budgetLimit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Spent Amount:</span>
                    <span>₹{spentAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span>Remaining Budget:</span>
                    <span>₹{remainingBudget.toFixed(2)}</span>
                </div>
            </div>
            <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-4">
                    <div
                        className="bg-blue-600 h-4 rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
                <div className="mt-1 text-sm text-gray-600">{progressPercentage.toFixed(0)}% of your budget used</div>
            </div>
        </div>
    );
};

export default BudgetTracker;