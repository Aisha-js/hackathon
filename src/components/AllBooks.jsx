import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../contexts/ClientProvider";
import BookCard from "./BookCard";

const AllBooks = () => {
  const { getBooks, books } = useContext(ClientContext);
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);

  if (!books) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Все книги</h1>
      <div>
        <Grid container spacing={4}>
          {books.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <BookCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllBooks;
