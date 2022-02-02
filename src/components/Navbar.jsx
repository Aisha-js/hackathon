import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/logo-g9a3ac6b18_640.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/Authprovider";
import { Badge, Tooltip } from "@mui/material";
import Avatar from "../images/owl (1).png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ClientContext } from "../contexts/ClientProvider";
import FavoriteIcon from "@mui/icons-material/Bookmark";

const pages = [<Link to="/books">Библиотека</Link>];
const options = [
  <Link href="#" to="/add">
    Add Product
  </Link>,
  <Link to="/admin">Admin Panel</Link>,
];

const ITEM_HEIGHT = 48;

const Navbar = () => {
  const { booksCount } = React.useContext(ClientContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [anchorElLong, setAnchorElLong] = React.useState(null);
  const openn = Boolean(anchorElLong);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLongMenu = (event) => {
    setAnchorElLong(event.currentTarget);
  };
  const handleCloseLongMenu = () => {
    setAnchorElLong(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link underline="none" className="navbar-brand" to="/">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                color: "white",
                mr: 5,
                textAlign: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <img width="50" src={Logo} alt="logo" />
              MyBooks
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to="/">
              <img width="60" src={Logo} alt="logo" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            {user ? (
              <>
                <Tooltip title={user.displayName}>
                  <Button
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon sx={{ color: "black" }} />}
                  >
                    <img width="35" src={Avatar} alt="avatar" />
                  </Button>
                </Tooltip>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem> {user.email}</MenuItem>

                  <MenuItem
                    sx={{ fontSize: "20px", color: "darkblack" }}
                    onClick={logout}
                  >
                    Выйти
                    <LogoutIcon />
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button sx={{ color: "white" }} onClick={authWithGoogle}>
                Войти
              </Button>
            )}
          </Box>

          <Box sx={{ my: 2, color: "white", display: "block" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/cart">
                <IconButton>
                  <Badge
                    badgeContent={booksCount}
                    color="error"
                    sx={{ color: "white" }}
                  >
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>

          <Box sx={{ my: 2, color: "white", display: "block" }}>
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/favorite">
                <IconButton>
                  <Badge
                    badgeContent={booksCount}
                    color="error"
                    sx={{ color: "white" }}
                  >
                    <FavoriteIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Box>

          <Box>
            <IconButton
              aria-label="more"
              id="long-button"
              color="inherit"
              aria-controls={openn ? "long-menu" : undefined}
              aria-expanded={openn ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClickLongMenu}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorElLong}
              open={openn}
              onClose={handleCloseLongMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleCloseLongMenu}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
