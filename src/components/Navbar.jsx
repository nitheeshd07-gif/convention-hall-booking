import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Convention Hall Booking</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/halls">Halls</Link>
        <Link to="/booking">Book Hall</Link>
        <Link to="/history">Booking History</Link>
      </div>

    </nav>
  );
}

export default Navbar;