import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";
import { styled, Tooltip, tooltipClasses } from "@mui/material";
import Cart from "../images/shopping-cart.png";
import InCart from "../images/shopping-cart (1).png";
import Favorite from "../images/favorite.png";
import InFavorite from "../images/favorite (1).png";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function BookCard({ item }) {
  const {
    addAndDeleteBookInCart,
    checkBookInCart,
    addAndDeleteBookInFavorite,
    checkBookInFavorite,
  } = React.useContext(ClientContext);
  console.log(item);
  return (
    <Card sx={{ maxWidth: 200 }}>
      <Link to={`/books/${item.id}`}>
        <LightTooltip title="О книге" placement="right">
          <CardMedia
            component="img"
            height="240"
            image={item.image}
            alt={item.name}
            className="product-curd-image"
          />
        </LightTooltip>
      </Link>
      <CardContent>
        <Typography
          className="product-curd-title"
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.title}
        </Typography>
        <Typography
          className="product-curd-title"
          gutterBottom
          variant="h8"
          component="div"
        >
          Автор {item.author}
        </Typography>
        <Typography variant="h7">
          Цена: <strong>{item.price}</strong> $
        </Typography>
      </CardContent>

      <CardActions>
        {checkBookInCart(item.id) ? (
          <Button
            color="error"
            onClick={() => addAndDeleteBookInCart(item)}
            size="small"
          >
            <img width="30" src={InCart} alt="" />
          </Button>
        ) : (
          <Button onClick={() => addAndDeleteBookInCart(item)} size="small">
            <img width="30" src={Cart} alt="" />
          </Button>
        )}

        {checkBookInFavorite(item.id) ? (
          <Button
            color="error"
            onClick={() => addAndDeleteBookInFavorite(item)}
            size="small"
          >
            <img width="38" src={InFavorite} alt="" />
          </Button>
        ) : (
          <Button onClick={() => addAndDeleteBookInFavorite(item)} size="small">
            <img width="38" src={Favorite} alt="" />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
