import { NextResponse } from 'next/server';

let transactions = [
    { id: 't1', amount: 3500, type: 'debit', merchant: 'Rent Payment', category: 'Rent & Utilities', date: '2025-10-01' },
    { id: 't2', amount: 95, type: 'debit', merchant: 'SWIGGY FOODS', category: 'Food & Dining', date: '2025-10-05' },
    { id: 't3', amount: 50000, type: 'credit', merchant: 'Employer', category: 'Income', date: '2025-10-07' },
    { id: 't4', amount: 1500, type: 'debit', merchant: 'Flipkart', category: 'Shopping', date: '2025-10-10' },
];

export async function GET() {
    return NextResponse.json(transactions);
}

export async function POST(request: Request) {
    const newTransaction = await request.json();
    transactions.push({ ...newTransaction, id: `t${transactions.length + 1}` });
    return NextResponse.json(newTransaction, { status: 201 });
}