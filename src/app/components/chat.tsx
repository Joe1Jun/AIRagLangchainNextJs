'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-24">
        {messages.map(m => (
          <div key={m.id} className="whitespace-pre-wrap mb-4">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      </div>
      
      
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full backdrop-blur-sm p-4 md:p-6 flex justify-center items-center">
        <input
          className="w-full md:w-1/2 p-8 border border-gray-300 rounded-lg shadow-md"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
      </div>
   
  );
}