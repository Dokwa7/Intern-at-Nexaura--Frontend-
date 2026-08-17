import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';

function AnimeCard({ anime }) {
  const { canonicalTitle, averageRating, posterImage } = anime.attributes;
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === anime.id);

  return (
    <div className="anime-card">
      <Link to={`/anime/${anime.id}`}>
        <div className="anime-card-image-box">
          <img src={posterImage?.small} alt={canonicalTitle} />
        </div>
        <h3>{canonicalTitle}</h3>
      </Link>
      <p>{averageRating ?? 'N/A'}</p>
      <button onClick={() => toggleFavorite(anime)}>
        {isFavorite ? 'Remove' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default AnimeCard;