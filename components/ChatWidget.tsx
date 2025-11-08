"use client";
import React, { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: "user", text: input };
    setMessages((prev: Message[]) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg w-80">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 my-1 rounded-lg ${
              m.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
