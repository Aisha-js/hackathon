import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/image.png";
import Img2 from "../images/loggo.png";

const HomePage = () => {
  return (
    <div className="wrap">
      <img className="sea" src={Img} alt="" />
      <h1 className="texthome">
        MyBooks - интернет магазин <br />
        книг. Lorem ipsum dolor elit. Voluptatum, vero ad. Animi hic possimus
        voluptates in!
      </h1>

      <img className="logo" src={Img2} alt="" />

      <Link to="/books">
        <button
          className="button btn-outline-primary"
          style={{ position: "absolute", zIndex: 5 }}
        >
          Купить сейчас
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
