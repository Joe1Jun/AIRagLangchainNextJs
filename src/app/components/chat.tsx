// Chat.tsx
'use client';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  
  // Design 
  // -ml-64 is to reajust the page size to what is given in the layout. The sidebar takes up 64 ml
  // What does flex-1 do here 
  // justify start and justify end for the layout of the pages
  return (
    <div className="flex flex-col -ml-64">
      <div className="flex-1  pb-24 px-4">
      {messages.map(m => (

        <div key={m.id} className={`flex mb-4 ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
          <div className={`max-w-xs rounded-lg p-2 ${m.role === 'user' ? 'bg-blue-200 self-start' : 'bg-gray-200 self-end'}`}>
            <span className="font-bold ">{m.role === 'user' ? 'User: ' : 'AI: '}</span>
            <span className="whitespace-pre-wrap text-black">{m.content}</span>
          </div>
        </div>
      ))}
    </div>
      
      <div className="fixed bottom-0 left-0 right-0 md:left-64">
        <form onSubmit={handleSubmit} className="w-full backdrop-blur-sm p-4 md:p-6 flex justify-center items-center">
          <input
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg shadow-md"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  );
}