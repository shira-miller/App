import useMoviesStore from '../store/useMoviesStore';

function FavoritesBadge() {
  const favoriteCount = useMoviesStore(state => state.getFavoriteCount());
  
  return (
    <div className="favorites-badge">
      <span>favorate movies: {favoriteCount}</span>
    </div>
  );
}

export default FavoritesBadge;