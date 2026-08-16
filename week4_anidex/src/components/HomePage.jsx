import { useState, useEffect } from 'react';
import AnimeCard from '../components/AnimeCard';

function HomePage() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('naruto');

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
      <input
        type="text"
        placeholder="Search anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

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