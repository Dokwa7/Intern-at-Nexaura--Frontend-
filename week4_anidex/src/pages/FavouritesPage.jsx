import AnimeCard from '../components/AnimeCard';
import { useFavorites } from '../context/FavoritesContext';

function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <p>No favorites yet — go add some!</p>;
  }

  return (
    <div className="anime-grid">
      {favorites.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}

export default FavoritesPage;