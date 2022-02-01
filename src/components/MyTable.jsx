import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../contexts/AdminProvider";
import EditRow from "./EditRow";
import { Button } from "@mui/material";

export default function MyTable() {
  const { getBooks, books, deleteBook } = React.useContext(AdminContext);
  React.useEffect(() => {
    getBooks();
  }, []);

  const [editBook, setEditBook] = React.useState(null);

  console.log(editBook);

  if (!books) {
    return <h2>Loading...</h2>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Автор</TableCell>
            <TableCell align="right">Год выпуска</TableCell>
            <TableCell align="right">Описание</TableCell>
            <TableCell align="right">Жанр</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <React.Fragment key={row.id}>
              {editBook?.id === row.id ? (
                <EditRow setEditBook={setEditBook} editBook={editBook} />
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img width={100} src={row.image} alt="img" />
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.author}</TableCell>
                  <TableCell align="right">{row.releaseDate}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.genre}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>

                  <TableCell align="right">
                    <Button onClick={() => setEditBook(row)}>EDIT</Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => deleteBook(row.id)}>DELETE</Button>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
