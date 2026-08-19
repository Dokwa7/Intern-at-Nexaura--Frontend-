import { useState, useEffect } from 'react';

function StartScreen({ onStart }) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [amount, setAmount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (err) {
        setError('Could not load categories.');
      }
    };

    fetchCategories();
  }, []);

  const handleStart = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length === 0) {
        setError('No questions found for that combination — try different settings.');
        setLoading(false);
        return;
      }

      onStart(data.results);
    } catch (err) {
      setError('Failed to load questions. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="start-screen">
      {error && <p className="error">{error}</p>}

      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Any Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </label>

      <label>
        Difficulty
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label>
        Number of Questions
        <input
          type="number"
          min="1"
          max="50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <button onClick={handleStart} disabled={loading}>
        {loading ? 'Loading...' : 'Start Quiz'}
      </button>
    </div>
  );
}

export default StartScreen;