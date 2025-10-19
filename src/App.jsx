import MoviesList from './components/MoviesList';
import Header from './components/Haeder';
import FiltersBar from './components/filterBar';
import './css/style.css';

export default function App() {
  return (
    <div className="app-container" dir="rtl">
      <div className="content-wrapper">
        <Header />
        <FiltersBar />
        <MoviesList />
      </div>
    </div>
  );
}