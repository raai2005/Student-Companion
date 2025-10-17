# 📚 AI Study Companion

A simple and impactful study web application built with **Next.js**. It uses AI to generate study flashcards and quizzes based on any topic entered by the user.

## 🚀 Project Overview

The **AI Study Companion** is designed to simulate a smart study mentor. Users enter a study topic (e.g., _Machine Learning_), and the application will:

- Break it into **subtopics**.
- Provide **readable learning cards** (like mini docs).
- Then generate **flashcards with Q&A** for each subtopic.
- Guide users to choose specific areas they want to focus on.
- Offer **quiz mode** to test knowledge.

## 🎯 Core Features

- ✍️ **Topic Input** – Enter any subject or concept.
- 🤖 **AI Flashcard Generation** – Automatic Q/A flashcards using AI API.
- 📝 **Quiz Mode (Optional)** – AI-generated MCQs or True/False questions.
- 🔄 **Flashcard Viewer** – Swipe or flip through cards.
- 💾 **Save for Review** – Store important cards locally.
- 🔊 **Text-to-Speech (Optional)** – Listen to flashcards.

## 🧪 Tech Stack

| Category       | Technology                            |
| :------------- | :------------------------------------ |
| Framework      | Next.js                               |
| Language       | TypeScript                            |
| Database       | PostgreSQL                            |
| ORM            | Prisma                                |
| UI             | Tailwind CSS / Shadcn/ui              |
| PWA Support    | `next-pwa` for offline capabilities   |
| AI Integration | OpenAI / HuggingFace API / Gemini API |
| Deployment     | Vercel                                |

## 🛠️ Setup & Installation

### 1️⃣ Create a New Project

```bash
npx create-next-app@latest ai-study-companion-web --typescript --tailwind --eslint
```

### 2️⃣ Navigate to Project Directory

```bash
cd ai-study-companion-web
```

### 3️⃣ Setup Database with Prisma

Follow the [Prisma "Add to existing project" guide](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/add-to-existing-project-typescript-postgres) to connect your PostgreSQL database.

### 4️⃣ Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧠 AI Prompt Example

```
Generate 5 flashcards about "Photosynthesis".
Format:
Q: ...
A: ...
```

## 📌 Future Enhancements

- Dark/Light Mode
- Voice Input for topic
- Export flashcards to PDF

---

🔖 _This README will be expanded as development continues._
