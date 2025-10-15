# 📚 AI Study Companion (React Native)

A simple and impactful mobile app built using **React Native and AI integration**, designed to generate study flashcards and quizzes based on any topic entered by the user.

## 🚀 Project Overview

The **AI Study Companion** is designed to simulate a smart study mentor. Users enter a study topic (e.g., _Machine Learning_), and the app will:

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
| -------------- | ------------------------------------- |
| Framework      | React Native (Expo)                   |
| UI             | React Native Paper / NativeBase       |
| AI Integration | OpenAI / HuggingFace API / Gemini API |
| Storage        | AsyncStorage                          |
| Optional       | Expo Speech (Text-to-Speech)          |

## 🛠 Setup & Installation

### 1️⃣ Install Expo CLI

```bash
npm install -g expo-cli
```

### 2️⃣ Create a New Project

```bash
expo init ai-study-companion
```

Choose **Blank Template**

### 3️⃣ Navigate to Project Directory

```bash
cd ai-study-companion
```

### 4️⃣ Start Development Server

```bash
expo start
```

Scan the QR code using **Expo Go App** on your phone.

### 5️⃣ If LAN Mode Doesn’t Work (Tunnel Mode)

Sometimes your phone cannot reach the Metro bundler on LAN. In that case, use **Tunnel Mode**:

```bash
npx expo start --tunnel
```

- Scan the QR code shown after starting in tunnel mode.
- Alternatively, copy the `exp://` URL and paste it manually in Expo Go.
- This works even if phone and PC are on different networks.

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
