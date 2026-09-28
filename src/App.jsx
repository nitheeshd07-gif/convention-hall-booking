import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Halls from "./pages/Halls";
import Booking from "./pages/Booking";
import BookingHistory from "./pages/BookingHistory";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Convention Hall</h2>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/halls">Halls</Link>
          <Link to="/booking">Book Hall</Link>
          <Link to="/history">Booking History</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/halls" element={<Halls />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;