import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { question } = await request.json();

    let responseMessage = "I am FinBuddy, your AI mentor.";

    if (question.toLowerCase().includes("sip")) {
        responseMessage = "A Systematic Investment Plan (SIP) is a method of investing a fixed sum regularly in mutual funds.";
    } else if (question.toLowerCase().includes("coffee")) {
        responseMessage = "You're spending too much on coffee. Skip one cup and invest ₹100 instead to gain 50 XP!";
    }

    return NextResponse.json({ response: responseMessage });
}