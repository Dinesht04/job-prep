
Real-time quiz platform (QuizVerse)
Next.js · WebSockets · Gemini API · Prisma · Oct 2025
fullstack
one-liner hook

"QuizVerse is a real-time multiplayer quiz app — up to 100 players per room, sub-50ms bi-directional communication, with AI-generated questions on the fly. It's live at quizverse-sigma.vercel.app."
the architecture

"It's split into a Next.js frontend and a separate Node.js WebSocket backend. The WebSocket layer handles all the real-time game state — room creation, player joins, chat in the lobby, score updates. Auth is via Auth.js with Google login and a guest mode, backed by Prisma and PostgreSQL. When the host starts a quiz, the backend hits the Gemini API with a structured prompt — topic, difficulty — and gets back 5 questions. Two modes: Lightning, which is fastest-finger-first, and a normal quiz mode."
what i'm proud of

"The sub-50ms latency with 100 concurrent players — that required careful attention to how WebSocket events are broadcast and how state is managed server-side without unnecessary re-broadcasts. Also open-sourced it with a real README so other students can fork it for college events."
Next.jsWebSocketsGemini APIAuth.jsPrismaPostgreSQL 