import { formatDate } from "../utils/formatDate"; 

/**
 * Podcast preview card
 * @param {Object} props
 * @param {Object} props.podcast
 */
function PodcastCard({ podcast }) {
  return (
    <article className="podcast-card">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-image"
      />

      <div className="podcast-content">
        <h2>{podcast.title}</h2>

        <p>
          <strong>{podcast.seasons}</strong> Seasons
        </p>

        <div className="genres">
          {podcast.genres.map((genre) => (
            <span key={genre} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <p className="updated">
          Updated {formatDate(podcast.updated)}
        </p>
      </div>
    </article>
  );
}

export default PodcastCard;