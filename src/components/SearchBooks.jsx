import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router";
import { ClientContext } from "../contexts/ClientProvider";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBooks = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getBooks } = useContext(ClientContext);

  const [value, setValue] = useState("");

  function filter(key, value) {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setValue(search.get("q"));
    getBooks();
  }

  useEffect(() => {
    setValue(search.get("q"));
  }, []);

  return (
    <div className="search-book">
      <Toolbar variant="outlined" color="error">
        <Search>
          <SearchIconWrapper variant="outlined">
            <SearchIcon color="primary" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => filter("q", event.target.value)}
            value={value}
          />
        </Search>
      </Toolbar>
    </div>
  );
};

export default SearchBooks;
