import { useReducer, useState, useEffect, useMemo } from 'react';
import { quizReducer, initialQuizState } from '../quizReducer';

const TIME_PER_QUESTION = 15;

function decodeHTML(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function QuizScreen({ questions, onFinish }) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const { currentIndex, selectedAnswer, isAnswered, score } = state;
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);

  const currentQuestion = questions[currentIndex];

const allAnswers = useMemo(() => {
  return [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    .sort(() => Math.random() - 0.5);
}, [currentIndex]);

  // Reset the timer every time we move to a new question
  useEffect(() => {
    setTimeLeft(TIME_PER_QUESTION);
  }, [currentIndex]);

  // Tick the timer down, once per second
  useEffect(() => {
    if (isAnswered) return; // stop ticking once answered — no point counting down further

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentIndex, isAnswered]);

  // Watch for time running out
  useEffect(() => {
    if (timeLeft <= 0 && !isAnswered) {
      dispatch({ type: 'TIME_UP' });
    }
  }, [timeLeft, isAnswered]);

  const handleAnswer = (answer) => {
    if (isAnswered) return;

    dispatch({
      type: 'ANSWER_QUESTION',
      payload: {
        answer,
        isCorrect: answer === currentQuestion.correct_answer,
      },
    });
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      onFinish(score);
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
    }
  };

  return (
    <div className="quiz-screen">
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="quiz-meta">
        <p className="progress">Question {currentIndex + 1} of {questions.length}</p>
        <p className={`timer ${timeLeft <= 5 ? 'timer-urgent' : ''}`}>⏱ {Math.max(timeLeft, 0)}s</p>
      </div>

      <h2>{decodeHTML(currentQuestion.question)}</h2>

      <div className="answers">
        {allAnswers.map((answer) => {
          const isCorrectAnswer = answer === currentQuestion.correct_answer;
          const isSelected = answer === selectedAnswer;

          let className = 'answer-btn';
          if (isAnswered && isCorrectAnswer) className += ' correct';
          if (isAnswered && isSelected && !isCorrectAnswer) className += ' incorrect';

          return (
            <button
              key={answer}
              className={className}
              onClick={() => handleAnswer(answer)}
              disabled={isAnswered}
            >
              {decodeHTML(answer)}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <button className="next-btn" onClick={handleNext}>
          {currentIndex + 1 >= questions.length ? 'See Results' : 'Next Question'}
        </button>
      )}
    </div>
  );
}

export default QuizScreen;