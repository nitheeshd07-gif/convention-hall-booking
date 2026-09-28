import { useState } from "react";
import { supabase } from "../lib/supabase";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    booking_date: "",
    guests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.booking_date ||
      !formData.guests
    ) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("bookings")
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            booking_date: formData.booking_date,
            guests: Number(formData.guests),
          },
        ]);

      if (error) {
        console.error("Supabase error:", error);
        alert("Booking failed: " + error.message);
        return;
      }

      alert("Booking successful!");

      setFormData({
        name: "",
        phone: "",
        booking_date: "",
        guests: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Convention Hall Booking</h1>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />

          <label style={styles.label}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            style={styles.input}
          />

          <label style={styles.label}>Booking Date</label>
          <input
            type="date"
            name="booking_date"
            value={formData.booking_date}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Number of Guests</label>
          <input
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter number of guests"
            min="1"
            style={styles.input}
          />

          <button
            type="submit"
            disabled={loading}
            style={styles.button}
          >
            {loading ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    marginTop: "15px",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "25px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Booking;