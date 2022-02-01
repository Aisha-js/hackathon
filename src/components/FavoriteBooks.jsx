import {
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

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

const FavoriteBooks = ({ item }) => {
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
          Цена: <strong>{item.price}</strong> сом
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavoriteBooks;
