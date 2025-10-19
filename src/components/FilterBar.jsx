import useMoviesStore from '../store/useMoviesStore';

function FiltersBar() {
  const filter = useMoviesStore(state => state.filter);
  const setFilter = useMoviesStore(state => state.setFilter);
  
  return (
    <div className="filters-bar">
      <button
        onClick={() => setFilter('all')}
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
      >
        all movies
      </button>
      <button
        onClick={() => setFilter('bookmarked')}
        className={`filter-btn ${filter === 'bookmarked' ? 'active' : ''}`}
      >
        favorate movies
      </button>
    </div>
  );
}

export default FiltersBar;