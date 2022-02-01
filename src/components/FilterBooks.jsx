import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";
import SearchBooks from "./SearchBooks";

const FilterBooks = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getBooks } = useContext(ClientContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  function filter(key, value) {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    getBooks();
  }
  function reset() {
    navigate("/books");
    getBooks();
    setFrom("");
    setTo("");
  }

  useEffect(() => {
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
  }, []);

  return (
    <div className="filter-books">
      <div className="price-filter">
        <TextField
          onChange={(event) => filter("price_gte", event.target.value)}
          variant="standard"
          label="От"
          value={from}
        />
        <TextField
          onChange={(event) => filter("price_lte", event.target.value)}
          variant="standard"
          label="До"
          value={to}
        />
        <CloseIcon
          color="primary"
          style={{ cursor: "pointer" }}
          onClick={reset}
        />
      </div>
      <SearchBooks />
    </div>
  );
};

export default FilterBooks;
