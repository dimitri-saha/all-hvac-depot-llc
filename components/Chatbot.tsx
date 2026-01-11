
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m your HVAC assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const botResponse = await getGeminiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-[350px] sm:w-[400px] flex flex-col overflow-hidden border border-gray-100 max-h-[600px]">
          <div className="bg-black p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-white/20 p-2 rounded-xl">
                <Bot size={20} />
              </div>
              <span className="font-bold tracking-tight">HVAC Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl flex items-start space-x-2 ${
                  msg.role === 'user' 
                  ? 'bg-black text-white' 
                  : 'bg-light-grey text-gray-700'
                }`}>
                  {msg.role === 'bot' && <Bot size={16} className="mt-1 flex-shrink-0" />}
                  <span className="text-sm leading-relaxed">{msg.text}</span>
                  {msg.role === 'user' && <User size={16} className="mt-1 flex-shrink-0" />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-light-grey p-4 rounded-2xl space-x-1 flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-light-grey rounded-2xl px-4 py-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent py-3 text-sm outline-none"
              />
              <button onClick={handleSend} disabled={isLoading} className="text-black disabled:opacity-30">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
