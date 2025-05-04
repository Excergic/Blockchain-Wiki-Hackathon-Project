import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Web3Event {
  name: string;
  date: string;
  location: string;
  description: string;
  link: string;
}

const web3Events: Web3Event[] = [
  {
    name: 'Solana Breakout Hackathon',
    date: 'April 14–May 16, 2025',
    location: 'Online',
    description:
      'A global, online hackathon powered by Colosseum, where thousands of developers compete to build innovative Solana ecosystem projects, with prizes, pre-seed funding, and acceptance into Colosseum’s accelerator program.',
    link: 'https://colosseum.org/breakout',
  },
];

const Header: React.FC = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const toggleEventsModal = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  const title = 'Blockchain Wiki';

  return (
    <>
      <header className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white border-b border-indigo-700 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Custom Wikipedia Logo with Glow */}
            <svg
              className="h-10 w-10 mr-4 logo"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" stroke="#7c3aed" strokeWidth="5" />
              <path
                d="M50 20V80M30 30L50 20L70 30M30 50H70M30 70L50 80L70 70"
                stroke="#7c3aed"
                strokeWidth="5"
              />
              <circle cx="50" cy="50" r="12" fill="#7c3aed" />
            </svg>
            {/* Fancy Animated Blockchain Wiki Text */}
            <div className="fancy-text">
              {title.split('').map((char, index) => (
                <span key={index} style={{ '--letter-index': index } as React.CSSProperties}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </div>
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="mt-4 bg-gradient-to-r from-black to-gray-950 text-white visited:text-white no-underline font-bold px-4 py-2 rounded-lg hover:shadow-glow flex items-center transition-all duration-300"
            >
              Main Page
            </Link>
            <button
              onClick={toggleEventsModal}
              className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-glow hover:scale-110 flex items-center transition-all duration-300"
            >
              Current events
            </button>
          </nav>
        </div>
      </header>

      {/* Events Modal */}
      {isEventsOpen && (
        <div className="events-modal open">
          <div className="events-modal-content">
            <button
              onClick={toggleEventsModal}
              className="events-modal-close"
              aria-label="Close events modal"
            >
              Close
            </button>
            <h2 className="text-2xl font-semibold mb-6">Upcoming Web3 Events in 2025</h2>
            {web3Events.map((event, index) => (
              <div key={index} className="event-item">
                <h3>{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
                <p>
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    Register or Learn More
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;