import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, TableFooter } from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";

export default function CartTable({ cart }) {
  const { changeCountCartBook, deleteBookInCart } =
    React.useContext(ClientContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.books.map((item) => (
            <TableRow
              key={item.book.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/book/${item.book.id}`}>
                  <img width="60" src={item.book.image} alt="book" />
                </Link>
              </TableCell>
              <TableCell align="right">{item.book.title}</TableCell>
              <TableCell align="right">{item.book.author}</TableCell>
              <TableCell align="right">
                <input
                  onChange={(event) => {
                    if (event.target.value < 1) {
                      return;
                    }
                    changeCountCartBook(event.target.value, item.book.id);
                  }}
                  type="number"
                  value={item.count}
                  min="1"
                />
              </TableCell>
              <TableCell align="right">{item.subPrice}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => deleteBookInCart(item.book.id)}>
                  <HighlightOffIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total price: </TableCell>
            <TableCell>{cart.totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
