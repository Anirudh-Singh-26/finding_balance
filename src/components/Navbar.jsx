import "./Navbar.css";
import logo from "../assets/Frame.svg"
import search from "../assets/search.svg"

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="brand">
          <img src= {logo} alt="Finding Balance Logo" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-first">Finding</span>{" "}
            <span className="brand-second">Balance</span>
          </span>
        </div>

        <nav className="nav-links">
          <a className="nav-link" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Blog
          </a>
          <a className="nav-link" href="#">
            About
          </a>
          <a className="nav-link" href="#">
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="search">
            <img src={search} alt="search icon" />
          </button>

          <div className="divider" />

          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
}
