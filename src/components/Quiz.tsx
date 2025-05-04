import { useState } from 'react';
import { Link } from 'react-router-dom';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'Who introduced blockchain technology in 2008?',
    options: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Gavin Andresen', 'Elon Musk'],
    correctAnswer: 'Satoshi Nakamoto',
  },
  {
    question: 'What is the primary function of a blockchain?',
    options: ['Centralized data storage', 'Decentralized ledger', 'Cloud computing', 'Social networking'],
    correctAnswer: 'Decentralized ledger',
  },
  {
    question: 'What is a smart contract?',
    options: [
      'A physical contract signed digitally',
      'Self-executing code on a blockchain',
      'A cryptocurrency wallet',
      'A type of blockchain consensus',
    ],
    correctAnswer: 'Self-executing code on a blockchain',
  },
  {
    question: 'Which cryptocurrency was the first to use blockchain?',
    options: ['Ethereum', 'Bitcoin', 'Solana', 'Ripple'],
    correctAnswer: 'Bitcoin',
  },
  {
    question: 'What is a major challenge of blockchain technology?',
    options: [
      'Unlimited scalability',
      'Low energy consumption',
      'Scalability and energy usage',
      'Centralized control',
    ],
    correctAnswer: 'Scalability and energy usage',
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(quizQuestions.length).fill(null));
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === quizQuestions[currentQuestion].correctAnswer;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);
    setFeedback(isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${quizQuestions[currentQuestion].correctAnswer}`);

    setTimeout(() => {
      setFeedback(null);
      if (currentQuestion === quizQuestions.length - 1) {
        const finalScore = updatedAnswers.reduce((acc, ans, idx) => {
          return ans === quizQuestions[idx].correctAnswer ? acc + 1 : acc;
        }, 0);
        setScore(finalScore);
      }
    }, 2000);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (userAnswers[currentQuestion] !== null) {
      const finalScore = userAnswers.reduce((acc, ans, idx) => {
        return ans === quizQuestions[idx].correctAnswer ? acc + 1 : acc;
      }, 0);
      setScore(finalScore);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizQuestions.length).fill(null));
    setFeedback(null);
    setScore(null);
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 animate-fadeIn">Blockchain Quiz</h1>
      <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        Test your knowledge of blockchain technology with this interactive quiz. Answer the questions below to see how well
        you’ve grasped the content from our Blockchain article!
      </p>

      {score === null ? (
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-indigo-900 p-8 rounded-lg shadow-md animate-fadeIn">
          <h2 className="text-2xl font-semibold mb-6">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </h2>
          <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>
          <div className="grid grid-cols-1 gap-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`bg-gradient-to-r from-#7c3aed to-#4b9cea text-#e0e7ff px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${
                  feedback || userAnswers[currentQuestion] ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!!feedback || !!userAnswers[currentQuestion]}
              >
                {option}
              </button>
            ))}
          </div>
          {feedback && (
            <p className={`mt-6 text-lg ${feedback.includes('Correct') ? 'text-green-400' : 'text-red-400'}`}>
              {feedback}
            </p>
          )}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              className={`bg-gradient-to-r from-#7c3aed to-#4b9cea text-#e0e7ff px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${
                currentQuestion === 0 || feedback ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentQuestion === 0 || !!feedback}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`bg-gradient-to-r from-#7c3aed to-#4b9cea text-#e0e7ff px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 ${
                (currentQuestion === quizQuestions.length - 1 && !userAnswers[currentQuestion]) || feedback
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              disabled={(currentQuestion === quizQuestions.length - 1 && !userAnswers[currentQuestion]) || !!feedback}
            >
              {currentQuestion === quizQuestions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-900 to-indigo-900 p-8 rounded-lg shadow-md animate-fadeIn text-center">
          <h2 className="text-2xl font-semibold mb-6">Quiz Completed!</h2>
          <p className="text-lg mb-6">
            Your score: {score} out of {quizQuestions.length}
          </p>
          <p className="text-gray-300 mb-6">
            {score === quizQuestions.length
              ? 'Perfect score! You’re a blockchain expert!'
              : score >= 3
              ? 'Great job! Review the article to master the remaining concepts.'
              : 'Nice try! Dive back into the Blockchain article to learn more.'}
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-#7c3aed to-#4b9cea text-#e0e7ff px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Retake Quiz
            </button>
            <Link
              to="/blockchain"
              className="bg-gradient-to-r from-#7c3aed to-#4b9cea text-#e0e7ff px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Review Article
            </Link>
          </div>
        </div>
      )}

      <div className="text-center mt-8">
        <Link to="/blockchain" className="text-#4b9cea hover:underline">
          Back to Article
        </Link>
      </div>
    </div>
  );
};

export default Quiz;