import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <ul className="mt-2">
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`flex justify-between p-2 border-b ${transaction.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
            <span>{transaction.merchant}</span>
            <span>{transaction.amount > 0 ? `+₹${transaction.amount}` : `-₹${Math.abs(transaction.amount)}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;