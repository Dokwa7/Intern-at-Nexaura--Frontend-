import { useReducer } from 'react';
import { quizReducer, initialQuizState } from '../quizReducer';

function decodeHTML(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function QuizScreen({ questions, onFinish }) {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);
  const { currentIndex, selectedAnswer, isAnswered, score } = state;

  const currentQuestion = questions[currentIndex];

  const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    .sort(() => Math.random() - 0.5);

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
      <p className="progress">Question {currentIndex + 1} of {questions.length}</p>
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