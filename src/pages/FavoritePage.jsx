import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import FavoriteBooks from "../components/FavoriteBooks";
import { ClientContext } from "../contexts/ClientProvider";

const FavoritePage = () => {
  const params = useParams();
  const { getFavorite, favorite } = useContext(ClientContext);
  useEffect(() => {
    getFavorite(params.id);
  }, []);
  console.log(favorite);
  if (!favorite) {
    return <h2>Loading...</h2>;
  }
  if (favorite.books.length === 0) {
    return <h2>Ваша корзина пуста</h2>;
  }
  return (
    <div>
      <h2>favorite PAGE</h2>
      <FavoriteBooks favorite={favorite} />
    </div>
  );
};

export default FavoritePage;
