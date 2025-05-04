import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Article from './components/Article';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/blockchain"
            element={
              <main className="container mx-auto p-6 flex flex-col md:flex-row animate-fadeIn">
                <Sidebar />
                <Article />
              </main>
            }
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
};

export default App;