import { useState } from 'react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        const question = input.trim().toLowerCase();
        let answer = 'Sorry, I don’t have an answer for that. Try another question!';
        if (question.includes('what is blockchain')) {
          answer =
            'A blockchain is a decentralized, distributed ledger that records transactions across a network of computers, ensuring security, transparency, and immutability.';
        } else if (question.includes('who created blockchain')) {
          answer = 'Blockchain was introduced by Satoshi Nakamoto in 2008 as part of the Bitcoin whitepaper.';
        } else if (question.includes('when was blockchain introduced')) {
          answer = 'Blockchain was introduced in 2008 with the Bitcoin whitepaper.';
        } else if (question.includes('what are blockchain applications')) {
          answer =
            'Blockchain is used in cryptocurrencies, supply chain management, smart contracts, decentralized finance, identity verification, and more.';
        }
        setResponse(answer);
        setInput('');
        setIsLoading(false);
      }, 500);
      // Note: For real AI, integrate Grok 3 API (https ئ://x.ai/api) here
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChatbot}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full hover:shadow-glow flex items-center transition-all duration-300"
      >
        Ask About Blockchain
        {isLoading && <span className="spinner inline-block"></span>}
      </button>
      <div
        className={`chatbot mt-2 p-4 bg-indigo-900 border border-indigo-700 rounded-lg shadow-md w-80 ${
          isOpen ? 'open' : ''
        }`}
      >
        <div className="mb-4">
          <p className="text-sm font-semibold">AI Assistant</p>
          <p className="text-xs">Ask questions about the Blockchain article!</p>
        </div>
        <input
          type="text"
          placeholder="e.g., What is Blockchain?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full p-2 bg-indigo-800 border border-indigo-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        />
        {response && (
          <div className="mt-2 text-sm chatbot-message">
            <p className="p-2 bg-indigo-800 rounded-lg typing">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;