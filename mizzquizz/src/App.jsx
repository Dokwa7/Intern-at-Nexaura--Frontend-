import { useState } from 'react';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [questions, setQuestions] = useState([]);
  const [finalScore, setFinalScore] = useState(0);

  const handleQuizStart = (fetchedQuestions) => {
    setQuestions(fetchedQuestions);
    setScreen('quiz');
  };

  const handleQuizFinish = (score) => {
    setFinalScore(score);
    setScreen('results');
  };

  return (
    <div className="app">
      <h1>Quizzy</h1>

      {screen === 'start' && <StartScreen onStart={handleQuizStart} />}
      {screen === 'quiz' && <QuizScreen questions={questions} onFinish={handleQuizFinish} />}
      {screen === 'results' && <p>Final score: {finalScore} — Results screen polish comes Day 4</p>}
    </div>
  );
}

export default App;