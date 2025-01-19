'use client';

import Navbar from './navbar';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-900">
    
    <div className="border-t border-l border-r border-gray-400 rounded-lg p-4 w-3/4 max-w-md h-3/4 overflow-y-auto bg-gray-800 relative">
      
      {/* Chat messages container */}
      <div className="flex flex-col w-full space-y-4 pb-16">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } px-4 py-2 rounded-lg max-w-xs break-words`}
            >
              {m.role === "user" ? "User: " : "AI: "} {m.content}
            </div>
          </div>
        ))}
      </div>
  
      {/* Fixed input form at the bottom */}
      <form onSubmit={handleSubmit} className="absolute bottom-4 w-full px-4 flex justify-center ">
        <input
          className="w-full p-2 bg-black text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  </div>
  
    
    

  );
}