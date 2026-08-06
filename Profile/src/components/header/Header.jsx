import { profile } from "../../data/profile";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <span className="nav-mark">{profile.name.split(" ")[0]}</span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-avatar hero-avatar--placeholder"></div>

        <span className="eyebrow">{profile.role}</span>
        <h1 className="hero-title">
          {profile.heroLine1}
          <br />
          {profile.heroLine2}
        </h1>
      </div>
    </header>
  );
}

export default Header;
