import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ClientContext } from "../contexts/ClientProvider";

export default function BooksPagination() {
  const { postPerPage, totalBooksCount, currentPage, setCurrentPage } =
    React.useContext(ClientContext);
  const pagesCount = Math.ceil(totalBooksCount / postPerPage);
  return (
    <Stack spacing={2}>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        color="primary"
        count={pagesCount}
        page={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </Stack>
  );
}
