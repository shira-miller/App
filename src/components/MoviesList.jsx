import useMoviesStore from '../store/useMoviesStore';
import MovieCard from './MovieCard';

function MoviesList() {
  const movies = useMoviesStore(state => state.movies);
  const filter = useMoviesStore(state => state.filter);

  const filteredMovies = filter === 'bookmarked'
    ? movies.filter(movie => movie.bookmarked)
    : movies;

  return (
    <div className="movies-list">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movieId={movie.id} />
      ))}
      {filteredMovies.length === 0 && (
        <div className="empty-state">
          <p>favorate movies not found</p>
        </div>
      )}
    </div>
  );
}

export default MoviesList;