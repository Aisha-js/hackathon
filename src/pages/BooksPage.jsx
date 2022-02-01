import { Container } from "@mui/material";
import React from "react";
import AllBooks from "../components/AllBooks";
import BooksPagination from "../components/BooksPagination";
import FilterBooks from "../components/FilterBooks";

const BooksPage = () => {
  return (
    <div>
      <Container>
        <FilterBooks />
        <AllBooks />
        <BooksPagination />
      </Container>
    </div>
  );
};

export default BooksPage;
