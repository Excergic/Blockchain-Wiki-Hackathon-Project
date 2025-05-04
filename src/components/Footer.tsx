const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 border-t border-gray-700 p-4 text-center text-sm text-gray-400">
        <p>
          <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
            About Wikipedia
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
            Disclaimers
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline" onClick={(e) => e.preventDefault()}>
            Contact Wikipedia
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;