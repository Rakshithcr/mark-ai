"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function AssistantPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askMark = () => {
    if (!question) return;

    setAnswer(
      `Hello, I am MARK AI. You asked: "${question}". Future AI integration with OpenAI will generate intelligent responses here.`
    );
  };

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />
      <h1 className="text-6xl font-bold text-cyan-400 mb-10">
        MARK AI ASSISTANT
      </h1>

      <div className="max-w-4xl">

        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask MARK anything..."
          className="w-full p-4 rounded-lg bg-gray-900 border border-cyan-500 text-white"
        />

        <button
          onClick={askMark}
          className="mt-5 px-6 py-3 bg-cyan-500 text-black rounded-lg font-bold"
        >
          Ask MARK
        </button>

        {answer && (
          <div className="mt-8 border border-cyan-500 rounded-xl p-6">
            <h2 className="text-cyan-400 text-xl font-bold mb-3">
              MARK Response
            </h2>

            <p>{answer}</p>
          </div>
        )}

      </div>

    </main>
  );
}