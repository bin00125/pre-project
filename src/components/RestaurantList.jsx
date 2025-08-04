import { useEffect, useState } from "react";
import { fetchFavoriteAdd, fetchPlaces } from "../api/placeApi";
import Card from "./Card";

export default function RestaurantList() {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPlaces();
        setPlace(data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError("404에러");
        } else {
          setError("데이터를 불러오는 중 오류");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFavorite = async (item) => {
    try {
      const res = await fetchFavoriteAdd(item);
      alert(res.message || "찜 완료");
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <div className="loading">
      <p>맛집을 불러오는 중입니다</p>
    </div>
  ) : error ? (
    <div className="error">
      <p>{error}</p>
    </div>
  ) : (
    <>
      <Card place={place} handleFavorite={handleFavorite} showFavoriteButton={true} />
    </>
  );
}
