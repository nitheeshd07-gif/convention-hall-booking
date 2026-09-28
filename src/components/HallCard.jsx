import { useNavigate } from "react-router-dom";

function HallCard({ name, location, capacity, price }) {

  const navigate = useNavigate();

  function handleBooking() {
    navigate("/booking");
  }

  return (
    <div className="hall-card">

      <h2>{name}</h2>

      <p>📍 {location}</p>

      <p>👥 Capacity: {capacity} people</p>

      <p>💰 Price: ₹{price} per day</p>

      <button onClick={handleBooking}>
        Book Now
      </button>

    </div>
  );
}

export default HallCard;