import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-title">AniDex</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default NavBar;