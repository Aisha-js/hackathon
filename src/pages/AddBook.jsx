import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminProvider";

import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AddBook = () => {
  const [newBook, setNewBook] = useState({
    image: "",
    title: "",
    author: "",
    releaseDate: "",
    description: "",
    genre: "",
    price: "",
  });

  const { addBook } = useContext(AdminContext);

  function handleInput(event) {
    let object = {
      ...newBook,
      [event.target.name]: event.target.value,
    };
    setNewBook(object);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newBook) {
      if (!newBook[key].trim()) {
        alert("Заполните все поля!");
        return;
      }
    }
    addBook(newBook);
    setNewBook({
      image: "",
      title: "",
      author: "",
      releaseDate: "",
      description: "",
      genre: "",
      price: "",
    });
  }

  return (
    <div className="add-book">
      <Container>
        <Wrapper>
          <Title>ADD BOOK </Title>
          <Top>
            <form onSubmit={handleSubmit}>
              <TextField
                onChange={handleInput}
                fullWidth
                name="image"
                label="Image"
                variant="standard"
                value={newBook.image}
              />
              <TextField
                onChange={handleInput}
                fullWidth
                name="title"
                label="Title"
                variant="standard"
                value={newBook.title}
              />
              <TextField
                onChange={handleInput}
                fullWidth
                name="author"
                label="Author"
                variant="standard"
                value={newBook.author}
              />

              <TextField
                onChange={handleInput}
                fullWidth
                type="date"
                name="releaseDate"
                variant="standard"
                value={newBook.releaseDate}
              />
              <TextField
                onChange={handleInput}
                fullWidth
                name="description"
                label="Description"
                variant="standard"
                value={newBook.description}
              />

              <TextField
                onChange={handleInput}
                fullWidth
                name="genre"
                label="Genre"
                variant="standard"
                value={newBook.genre}
              />
              <TextField
                onChange={handleInput}
                fullWidth
                type="number"
                name="price"
                label="$"
                variant="standard"
                value={newBook.price}
              />

              <Button type="submit" variant="contained">
                Add
              </Button>
            </form>
          </Top>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AddBook;
