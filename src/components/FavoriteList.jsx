import { useEffect, useState } from "react";
import { deleteFavoritePlace, fetchFavoritePlace } from "../api/placeApi";
import Card from "./Card";

export default function FavoriteList() {
  const [favorites, setFavorites] = useState([]);
  const fetchFavorites = async () => {
    try {
      const data = await fetchFavoritePlace();
      setFavorites(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleCancelFavorite = async (item) => {
    try {
      await deleteFavoritePlace(item.id); // 찜 취소 API 호출 가정
      alert("찜이 취소되었습니다");
      fetchFavorites(); // 목록 새로고침
    } catch {
      alert("찜 취소 실패");
    }
  };
  return (
    <Card
      place={favorites}
      handleCancelFavorite={handleCancelFavorite}
      showFavoriteButton={false}
    />
  );
}
