import axios from "axios";
import { useEffect, useState } from "react";

export default function RestaurantList() {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get("http://localhost:3000/places");
        console.log("데이터", res.data.places);
        setPlace(res.data.places);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPlaces();
  }, []);

  return (
    <section>
      <h2>맛집 목록</h2>
      <ul className="place-list">
        {place.length > 0 ? (
          place.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <img src={`http://localhost:3000/${item.image.src}`} />
            </li>
          ))
        ) : (
          <li>로딩</li>
        )}
      </ul>
    </section>
  );
}
