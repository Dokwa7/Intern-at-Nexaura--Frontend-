import { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard';

function HomePage() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('Erased');

  useEffect(() => {
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError(null);

    const timeoutId = setTimeout(() => {
      const fetchAnime = async () => {
        try {
          const response = await fetch(
            `https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[limit]=12`
          );
          const data = await response.json();
          setAnimeList(data.data);
        } catch (err) {
          setError('Failed to fetch anime. Please try again.');
        } finally {
          setLoading(false);
        }
      };
      fetchAnime();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div>
      <div className="search-wrapper">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && <p>Loading anime...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="anime-grid">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;