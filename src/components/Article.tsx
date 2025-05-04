import { useState } from 'react';
import { Link } from 'react-router-dom';

const Article: React.FC = () => {
  const [expandedField, setExpandedField] = useState<string | null>(null);

  const toggleField = (field: string) => {
    setExpandedField(expandedField === field ? null : field);
  };

  return (
    <article className="flex-1 p-6 bg-gradient-to-r from-gray-900 to-indigo-900 rounded-lg shadow-md animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6">Blockchain</h1>

      {/* Infobox */}
      <aside className="infobox bg-gradient-to-r from-gray-900 to-indigo-900 p-4 rounded-lg mb-6 border border-indigo-700 shadow-lg float-right w-full md:w-1/3 ml-0 md:ml-6">
        <h2 className="text-xl font-semibold mb-4">Blockchain</h2>
        <ul className="text-gray-300">
          <li
            className="cursor-pointer hover:text-#4b9cea tooltip"
            data-tooltip="Click to expand details about the introduction"
            onClick={() => toggleField('introduced')}
          >
            <strong>Introduced:</strong> 2008
            {expandedField === 'introduced' && (
              <p className="mt-2 text-sm">
                Blockchain was introduced in 2008 by Satoshi Nakamoto as the underlying technology for Bitcoin.
              </p>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-#4b9cea tooltip"
            data-tooltip="Click to expand details about the creator"
            onClick={() => toggleField('creator')}
          >
            <strong>Created by:</strong> Satoshi Nakamoto
            {expandedField === 'creator' && (
              <p className="mt-2 text-sm">
                Satoshi Nakamoto is the pseudonymous creator of Bitcoin and blockchain, whose identity remains unknown.
              </p>
            )}
          </li>
          <li
            className="cursor-pointer hover:text-#4b9cea tooltip"
            data-tooltip="Click to expand details about the type"
            onClick={() => toggleField('type')}
          >
            <strong>Type:</strong> Distributed Ledger
            {expandedField === 'type' && (
              <p className="mt-2 text-sm">
                A distributed ledger is a database that is consensually shared and synchronized across multiple sites.
              </p>
            )}
          </li>
        </ul>
      </aside>

      {/* Article Content with Black Gradient */}
      <div className="article-content">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-300 mb-4">
            A <strong>blockchain</strong> is a decentralized and distributed digital ledger that records transactions across many computers. It was originally developed as the underlying technology for <a href="https://bitcoin.org" className="text-#4b9cea hover:underline">Bitcoin</a>, introduced by Satoshi Nakamoto in 2008. The technology ensures that the data is secure, transparent, and tamper-resistant, making it suitable for various applications beyond cryptocurrencies, such as supply chain management, smart contracts, and identity verification.
          </p>
          <p className="text-gray-300 quote">
            "Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system." — <em>Unknown</em>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">History</h2>
          <p className="text-gray-300 mb-4">
            The concept of blockchain was first introduced in 2008 by an individual or group under the pseudonym Satoshi Nakamoto in the Bitcoin whitepaper. The first blockchain was implemented in 2009 as the public ledger for Bitcoin transactions. In 2014, Vitalik Buterin proposed <a href="https://ethereum.org" className="text-#4b9cea hover:underline">Ethereum</a>, which introduced smart contracts, expanding blockchain’s use cases beyond financial transactions. Today, blockchain technology is being explored in various industries, from finance to healthcare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Structure and Design</h2>
          <p className="text-gray-300 mb-4">
            A blockchain consists of a chain of blocks, where each block contains a list of transactions, a timestamp, and a cryptographic hash of the previous block. This structure ensures immutability, as altering a block would require changing all subsequent blocks. Blockchains can be public (e.g., Bitcoin, Ethereum), private, or consortium-based, depending on access permissions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Applications</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><strong>Cryptocurrencies:</strong> Bitcoin, Ethereum, and other digital currencies rely on blockchain for secure transactions.</li>
            <li><strong>Smart Contracts:</strong> Self-executing contracts with terms directly written into code, pioneered by Ethereum.</li>
            <li><strong>Supply Chain:</strong> Blockchain ensures transparency and traceability in supply chains, used by companies like IBM.</li>
            <li><strong>Identity Verification:</strong> Blockchain can provide secure, decentralized identity management.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <p className="text-gray-300 mb-4">
            Despite its potential, blockchain faces challenges such as scalability, energy consumption (e.g., Bitcoin’s Proof of Work), and regulatory uncertainties. Solutions like Ethereum’s transition to Proof of Stake and layer-2 scaling are being developed to address these issues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">References</h2>
          <ul className="list-decimal list-inside text-gray-300">
            <li>
              <a
                href="https://bitcoin.org/bitcoin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#4b9cea hover:underline hover:transform hover:scale-105 transition-all duration-200"
              >
                Nakamoto, Satoshi. "Bitcoin: A Peer-to-Peer Electronic Cash System." bitcoin.org, 2008.
              </a>
            </li>
            <li>
              <a
                href="https://ethereum.org/en/whitepaper/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#4b9cea hover:underline hover:transform hover:scale-105 transition-all duration-200"
              >
                Buterin, Vitalik. "Ethereum Whitepaper." ethereum.org, 2014.
              </a>
            </li>
            <li>
              <a
                href="https://www.penguinrandomhouse.com/books/533533/blockchain-revolution-by-don-tapscott-and-alex-tapscott/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-#4b9cea hover:underline hover:transform hover:scale-105 transition-all duration-200"
              >
                Tapscott, Don and Alex. "Blockchain Revolution." Penguin Books, 2016.
              </a>
            </li>
          </ul>
        </section>

        {/* Quiz Button */}
        <section className="mt-8 text-center">
          <Link
            to="/quiz"
            className="cta-button text-#e0e7ff px-6 py-3 rounded-lg font-semibold text-lg pulse"
          >
            What have you learned from this content? Test what you have learned!
          </Link>
        </section>
      </div>
    </article>
  );
};

export default Article;