export interface User {
    id: string;
    username: string;
    level: number;
    xp_points: number;
    budget_limit_monthly: number;
}

export interface Transaction {
    id: string;
    user_id: string;
    amount: number;
    type: 'debit' | 'credit';
    merchant: string;
    category: 'Food' | 'Rent' | 'Shopping' | 'Income' | 'Other';
    date: Date;
}