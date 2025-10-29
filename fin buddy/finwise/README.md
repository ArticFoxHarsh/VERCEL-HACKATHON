# FinWise - Gamified Financial Mentor

FinWise is a web application designed to help students and first-time earners manage their finances through gamification and an AI mentor. The platform provides users with tools to track their expenses, set budgets, and engage with a virtual financial mentor, all while earning experience points (XP) and leveling up.

## Features

- **AI Chat Mentor (FinBuddy)**: A chatbot interface that provides financial advice and gamified nudges based on user queries.
- **Smart Budget Tracker**: A dashboard that displays the user's current level, XP points, recent transactions, and budget progress.
- **Gamified Progress**: Users can level up by completing daily challenges and managing their finances effectively.

## Tech Stack

- **Frontend**: Next.js (TypeScript) + Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Vercel Postgres or Supabase (mock data structure for MVP)
- **AI/LLM**: Mock API calls for OpenAI/Gemini

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd finwise
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Directory Structure

- `src/app`: Contains the main application files, including pages and API routes.
- `src/components`: Contains reusable components for the application.
- `src/lib`: Contains mock data and utility functions.
- `src/types`: Contains TypeScript interfaces for user and transaction data.
- `src/utils`: Contains helper functions used throughout the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.