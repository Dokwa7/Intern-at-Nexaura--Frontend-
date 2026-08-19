function ResultsScreen({ score, total, onPlayAgain }) {
  const percentage = Math.round((score / total) * 100);

  const getMessage = () => {
    if (percentage === 100) return "Perfect score! 🏆";
    if (percentage >= 80) return "Excellent work! 🌟";
    if (percentage >= 50) return "Not bad! Keep practicing. 👍";
    return "Tough round — try again! 💪";
  };

  return (
    <div className="results-screen">
      <h2>Quiz Complete</h2>
      <p className="results-score">{score} / {total}</p>
      <p className="results-percentage">{percentage}%</p>
      <p className="results-message">{getMessage()}</p>

      <button className="next-btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
}

export default ResultsScreen;