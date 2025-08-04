export default function Card({
  place,
  handleFavorite,
  handleCancelFavorite,
  showFavoriteButton = true,
}) {
  return (
    <section>
      <h2>맛집 목록</h2>
      <ul className="place-list">
        {place.length > 0 ? (
          place.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <img src={`http://localhost:3000/${item.image.src}`} />
              {showFavoriteButton && handleFavorite && (
                <button onClick={() => handleFavorite(item)}>찜하기</button>
              )}
              {!showFavoriteButton && handleCancelFavorite && (
                <button onClick={() => handleCancelFavorite(item)}>찜 취소</button>
              )}
            </li>
          ))
        ) : (
          <li>로딩</li>
        )}
      </ul>
    </section>
  );
}
