import { Button, TableCell, TableRow, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { AdminContext } from "../contexts/AdminProvider";

const EditRow = ({ editBook, setEditBook }) => {
  const [book, setBook] = useState(editBook);
  const { saveEditedBook } = useContext(AdminContext);

  function handleChange(event) {
    let object = {
      ...book,
      [event.target.name]: event.target.value,
    };
    setBook(object);
  }

  function handleClick() {
    saveEditedBook(book);
    setEditBook(null);
  }

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="image"
          onChange={handleChange}
          type="text"
          value={book.image}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField
          variant="standard"
          name="title"
          onChange={handleChange}
          type="text"
          value={book.title}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="author"
          onChange={handleChange}
          type="text"
          value={book.author}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="releaseDate"
          onChange={handleChange}
          type="date"
          value={book.releaseDate}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="description"
          onChange={handleChange}
          type="text"
          value={book.description}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="genre"
          onChange={handleChange}
          type="text"
          value={book.genre}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          variant="standard"
          name="price"
          onChange={handleChange}
          type="number"
          value={book.price}
        />
      </TableCell>

      <TableCell align="right">
        <Button onClick={handleClick}>SAVE</Button>
      </TableCell>
    </TableRow>
  );
};

export default EditRow;
