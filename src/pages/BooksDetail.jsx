import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const BookDetail = () => {
  const params = useParams();
  const { getBookDetail, detail } = useContext(ClientContext);
  useEffect(() => {
    getBookDetail(params.id);
  }, []);
  if (!detail) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container sx={{ textAlign: "center" }}>
      <h2>Book DETAIL</h2>
      <div className="book-detail">
        <Grid container>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <img src={detail.image} alt={detail.name} />
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div>
              <Typography
                className="product-curd-title"
                gutterBottom
                variant="h3"
                component="div"
              >
                {detail.title}
              </Typography>
              <Typography
                className="product-curd-title"
                gutterBottom
                variant="h8"
                component="div"
              >
                Автор {detail.author}
              </Typography>
              <Typography
                className="product-curd-title"
                gutterBottom
                variant="h8"
                component="div"
              >
                {detail.releaseDate}
              </Typography>

              <Typography
                className="product-curd-title"
                gutterBottom
                variant="h8"
                component="div"
              >
                <strong>Жанр</strong> {detail.genre}
              </Typography>
              <Typography
                className="product-curd-title"
                gutterBottom
                variant="body2"
                component="div"
                style={{ overflow: "hidden" }}
              >
                {detail.description}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default BookDetail;
