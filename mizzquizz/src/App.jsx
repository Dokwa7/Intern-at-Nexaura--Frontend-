import { useState } from 'react';
import StartScreen from './components/StartScreen';
import './App.css';

function App() {
  const [screen, setScreen] = useState('start');
  const [questions, setQuestions] = useState([]);

  const handleQuizStart = (fetchedQuestions) => {
    setQuestions(fetchedQuestions);
    setScreen('quiz');
  };

  return (
    <div className="app">
      <h1>Quizzy</h1>

      {screen === 'start' && <StartScreen onStart={handleQuizStart} />}
      {screen === 'quiz' && <p>Quiz screen — building this Day 2</p>}
      {screen === 'results' && <p>Results screen — building this Day 4</p>}
    </div>
  );
}

export default App;