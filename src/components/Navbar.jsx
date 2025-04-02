import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px 20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/dogs" style={{ color: "white", textDecoration: "none" }}>
        Dog Gallery
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;
