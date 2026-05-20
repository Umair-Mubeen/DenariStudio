import { ALL_CITIES } from "../../data/heritage";

export default function CitiesStrip() {
  const doubled = [...ALL_CITIES, ...ALL_CITIES];

  return (
    <div className="cities-footer-strip">
      <div className="cities-track">
        {doubled.map((city, i) => (
          <span key={i}>
            <span className="city-flag">📍</span>
            {city}
          </span>
        ))}
      </div>
    </div>
  );
}