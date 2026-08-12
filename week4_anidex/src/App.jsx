import {useState, useEffect} from 'react';
import './App.css';
import AnimeCard from './components/AnimeCard';

export default function App () {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch('https://kitsu.io/api/edge/anime');
        const data = await response.json();
        setAnimeList(data.data);
      } catch (err) {
        setError('Failed to fetch anime. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <div className="app">
      <h1>AniDex</h1>

      {loading && <p>Loading anime...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="anime-grid">
          {animeList.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );

}