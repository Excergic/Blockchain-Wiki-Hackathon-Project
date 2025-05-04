import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState('2008');

  const toggleFacts = () => {
    setIsOpen(!isOpen);
    setIsLoading(true);
    setTimeout(() => {
      const articleText = document.querySelector('section p')?.textContent || '';
      const dates = articleText.match(/\d{4}/g) || ['Unknown'];
      setDate(dates[0]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <aside className="w-full md:w-1/5 p-4 hidden md:block animate-fadeIn">
      <nav className="space-y-2">
      </nav>
      <button
        onClick={toggleFacts}
        className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-glow hover:scale-110 flex items-center transition-all duration-300"
      >
        Quick Facts
        {isLoading && <span className="spinner inline-block"></span>}
      </button>
      <div
        className={`quick-facts mt-2 p-4 bg-indigo-900 border border-indigo-700 rounded-lg shadow-md ${
          isOpen ? 'open' : ''
        }`}
      >
        <ul className="list-disc pl-4 text-sm">
          <li>
            Introduced: <span>{date}</span>
          </li>
          <li>Creator: Satoshi Nakamoto</li>
          <li>Type: Distributed ledger</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;