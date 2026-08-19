export const initialQuizState = {
  currentIndex: 0,
  selectedAnswer: null,
  isAnswered: false,
  score: 0,
};

export function quizReducer(state, action) {
  switch (action.type) {
    case 'ANSWER_QUESTION': {
      const isCorrect = action.payload.isCorrect;
      return {
        ...state,
        selectedAnswer: action.payload.answer,
        isAnswered: true,
        score: isCorrect ? state.score + 1 : state.score,
      };
    }

    case 'TIME_UP': {
      return {
        ...state,
        selectedAnswer: null,
        isAnswered: true,
      };
    }

    case 'NEXT_QUESTION': {
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        selectedAnswer: null,
        isAnswered: false,
      };
    }

    default:
      return state;
  }
}