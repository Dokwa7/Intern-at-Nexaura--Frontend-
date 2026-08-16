import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function AnimeDetailPage() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
      } catch (err) {
        setError('Failed to load anime details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!anime) return null;

  const { canonicalTitle, synopsis, averageRating, posterImage, episodeCount } = anime.attributes;

  return (
    <div className="detail-page">
      <Link to="/">&larr; Back</Link>
      <img src={posterImage?.large} alt={canonicalTitle} />
      <h1>{canonicalTitle}</h1>
      <p>⭐ {averageRating ?? 'N/A'} &middot; {episodeCount ?? '?'} episodes</p>
      <p>{synopsis}</p>
    </div>
  );
}

export default AnimeDetailPage;