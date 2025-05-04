import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import bitcoinLogo from '../assets/bitcoin.png';
import ethereumLogo from '../assets/eth.png';
import solanaLogo from '../assets/solana.png';

const LandingPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const coinContainerRef = useRef<HTMLDivElement>(null);

  // Parallax effect and scroll-based gradient
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY;
        const bg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
        bg.style.transform = `translateY(${offset * 0.3}px)`;
        // Update body class for scroll-based gradient
        document.body.classList.toggle('scroll-animated', offset > 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Coin fountain animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && coinContainerRef.current) {
          const coins = coinContainerRef.current.querySelectorAll('.coin');
          coins.forEach((coin, index) => {
            const randomDuration = Math.random();
            const randomDelay = Math.random();
            coin.setAttribute('style', `
              left: ${10 + (index % 5) * 20}%;
              width: ${40 + Math.random() * 40}px;
              height: ${40 + Math.random() * 40}px;
              --random-duration: ${randomDuration};
              --random-delay: ${randomDelay};
            `);
            setTimeout(() => {
              coin.classList.add('animate');
            }, index * 200);
          });
          // Reset animation after 3 seconds
          setTimeout(() => {
            coins.forEach((coin) => {
              coin.classList.remove('animate');
            });
          }, 3000);
        }
      },
      { threshold: 0.5 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Scroll to features section
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <section ref={heroRef} className="hero text-center py-16 relative">
        <div className="hero-bg"></div>
        <h1 className="text-5xl font-bold mb-4 animate-fadeIn">Blockchain Wiki</h1>
        <p className="text-xl mb-6 text-gray-300">
          Your ultimate resource for understanding blockchain technology, from its origins to its modern applications.
        </p>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <Link
            to="/blockchain"
            className="cta-button text-white px-6 py-3 rounded-lg font-semibold text-lg pulse"
          >
            Read About Blockchain
          </Link>
          <button
            onClick={scrollToFeatures}
            className="cta-button text-white px-6 py-3 rounded-lg font-semibold text-lg"
          >
            Discover Features
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fadeIn">About Blockchain Wiki</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
          Blockchain Wiki is a dedicated platform for exploring blockchain technology in depth. Our comprehensive article,
          interactive Quick Facts Sidebar, and knowledge quiz make learning about blockchain engaging and effective.
          Whether you’re new to decentralized ledgers or a seasoned expert, we’re here to deepen your understanding and
          test your knowledge.
        </p>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fadeIn">Why Choose Blockchain Wiki?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card p-6 rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">In-Depth Blockchain Article</h3>
            <p className="text-gray-300">
              Explore blockchain’s history, structure, applications, and challenges through a detailed, interactive article
              with clickable infobox fields and references.
            </p>
          </div>
          <div className="feature-card p-6 rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">Quick Facts Sidebar</h3>
            <p className="text-gray-300">
              Get instant insights with our dynamic sidebar, highlighting key details like blockchain’s 2008 introduction
              and creator, Satoshi Nakamoto.
            </p>
          </div>
          <div className="feature-card p-6 rounded-lg shadow-md animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4">Blockchain Knowledge Quiz</h3>
            <p className="text-gray-300">
              Test your understanding with our interactive quiz, designed to evaluate and reinforce the knowledge you gain
              from our Blockchain content.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4 animate-fadeIn">Dive into Blockchain</h2>
        <p className="text-lg text-gray-300 mb-6">
          Ready to explore the technology powering cryptocurrencies, smart contracts, and more? Start your journey now.
        </p>
        <Link
          to="/blockchain"
          className="cta-button text-white px-6 py-3 rounded-lg font-semibold text-lg pulse"
        >
          Start Reading
        </Link>
      </section>

      {/* Crypto Coin Fountain */}
      <div ref={coinContainerRef} className="coin-container">
        {[...Array(12)].map((_, index) => {
          const coinType = index % 3; // 0: BTC, 1: ETH, 2: SOL
          const logoSrc = coinType === 0 ? bitcoinLogo : coinType === 1 ? ethereumLogo : solanaLogo;
          return (
            <img
              key={index}
              className="coin"
              src={logoSrc}
              alt={coinType === 0 ? 'Bitcoin' : coinType === 1 ? 'Ethereum' : 'Solana'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;