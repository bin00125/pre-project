import axios from "axios";

//전체 맛집목록
export const fetchPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:3000/places");
    return res.data.places;
  } catch (err) {
    if (err instanceof Error) {
      throw err;
    }
  }
};

//찜하기 등록
export const fetchFavoriteAdd = async (place) => {
  try {
    const res = await axios.post("http://localhost:3000/users/places", { place });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

//찜한 목록 가져오기
export const fetchFavoritePlace = async () => {
  try {
    const res = await axios.get("http://localhost:3000/users/places");
    return res.data.places;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFavoritePlace = async (placeId) => {
  const res = await axios.delete(`http://localhost:3000/users/places/${placeId}`);
  return res.data;
};
