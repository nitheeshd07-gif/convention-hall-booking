import HallCard from "../components/HallCard";

function Halls() {
  return (
    <div className="halls-page">

      <h1>Available Convention Halls</h1>

      <div className="halls-container">

        <HallCard
          name="Royal Convention Hall"
          location="Bengaluru"
          capacity="500"
          price="25,000"
        />

        <HallCard
          name="Grand Palace Hall"
          location="Mysuru"
          capacity="800"
          price="35,000"
        />

        <HallCard
          name="Crystal Convention Hall"
          location="Bengaluru"
          capacity="1000"
          price="50,000"
        />

      </div>

    </div>
  );
}

export default Halls;