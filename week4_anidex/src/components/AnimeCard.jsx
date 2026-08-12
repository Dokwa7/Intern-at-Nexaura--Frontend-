export default function AnimeCard({ anime }) {
  const { canonicalTitle, averageRating, posterImage } = anime.attributes;

  return (
    <div className="anime-card">
      <img src={posterImage?.tiny} alt={canonicalTitle} />
      <h3>{canonicalTitle}</h3>
      <p>{averageRating ?? 'N/A'}</p>
    </div>
  );
}