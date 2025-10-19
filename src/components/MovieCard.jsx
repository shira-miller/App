import { Bookmark } from 'lucide-react';
import useMoviesStore from '../store/useMoviesStore';

function MovieCard({ movieId }) {
  const movie = useMoviesStore(state => 
    state.movies.find(m => m.id === movieId)
  );
  const toggleBookmark = useMoviesStore(state => state.toggleBookmark);
  
  if (!movie) return null;
  
  return (
    <div className="movie-card">
      <div>
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
      </div>
      <button
        onClick={() => toggleBookmark(movie.id)}
        className={`bookmark-btn ${movie.bookmarked ? 'bookmarked' : ''}`}
        aria-label={movie.bookmarked ? 'remove from bookmarks' : 'add to bookmarks'}
      >
        <Bookmark className={`bookmark-icon ${movie.bookmarked ? 'filled' : ''}`} />
      </button>
    </div>
  );
}

export default MovieCard;