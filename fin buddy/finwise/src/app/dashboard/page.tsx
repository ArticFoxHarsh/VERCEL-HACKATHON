import React from 'react';
import BudgetTracker from '@/components/BudgetTracker';
import LevelProgress from '@/components/LevelProgress';
import DailyChallenge from '@/components/DailyChallenge';
import TransactionList from '@/components/TransactionList';
import { MOCK_TRANSACTIONS } from '@/lib/mockData';

const DashboardPage: React.FC = () => {
    const user = {
        level: 1,
        xp_points: 0,
        budget_limit_monthly: 20000,
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <LevelProgress level={user.level} xpPoints={user.xp_points} />
            <BudgetTracker budgetLimit={user.budget_limit_monthly} transactions={MOCK_TRANSACTIONS} />
            <TransactionList transactions={MOCK_TRANSACTIONS} />
            <DailyChallenge />
        </div>
    );
};

export default DashboardPage;