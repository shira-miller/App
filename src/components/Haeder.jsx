import FavoritesBadge from './FavoritesBadge';

function Header() {
  return (
    <div className="header">
      <h1 className="app-title">my movies</h1>
      <FavoritesBadge />
    </div>
  );
}

export default Header;