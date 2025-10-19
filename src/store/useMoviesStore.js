import { create } from 'zustand';

const seedMovies = [
  { id: 'm1', title: 'Inception', year: 2010, bookmarked: false },
  { id: 'm2', title: 'Interstellar', year: 2014, bookmarked: true },
  { id: 'm3', title: 'Tenet', year: 2020, bookmarked: false },
  { id: 'm4', title: 'Dune', year: 2021, bookmarked: false }
];

const useMoviesStore = create((set, get) => ({
  movies: seedMovies,
  filter: 'all',
  
  toggleBookmark: (movieId) => 
    set((state) => ({
      movies: state.movies.map(movie =>
        movie.id === movieId
          ? { ...movie, bookmarked: !movie.bookmarked }
          : movie
      )
    })),
  
  setFilter: (filter) => set({ filter }),
  
  getFilteredMovies: () => {
    const { movies, filter } = get();
    return filter === 'bookmarked'
      ? movies.filter(movie => movie.bookmarked)
      : movies;
  },
  
  getFavoriteCount: () => {
    const { movies } = get();
    return movies.filter(movie => movie.bookmarked).length;
  }
}));

export default useMoviesStore;