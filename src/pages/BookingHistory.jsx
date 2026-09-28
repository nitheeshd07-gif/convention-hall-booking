import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
      alert("Unable to load bookings.");
      return;
    }

    setBookings(data);
    setLoading(false);
  }

  return (
    <div className="booking-history">
      <h1>Booking History</h1>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="bookings-container">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <h2>{booking.name}</h2>

              <p>
                <strong>Phone:</strong> {booking.phone}
              </p>

              <p>
                <strong>Booking Date:</strong> {booking.booking_date}
              </p>

              <p>
                <strong>Guests:</strong> {booking.guests}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingHistory;