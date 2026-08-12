export default function AnimeCard({ anime }) {
  const { canonicalTitle, averageRating, posterImage } = anime.attributes;

  return (
    <div className="anime-card">
      <img src={posterImage?.medium} alt={canonicalTitle} />
      <h3>{canonicalTitle}</h3>
      <p>{averageRating ?? 'N/A'}</p>
    </div>
  );
}