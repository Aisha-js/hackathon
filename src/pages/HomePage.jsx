import React from "react";
import { Link } from "react-router-dom";
import Img from "../images/image.png";
import Img2 from "../images/loggo.png";

const HomePage = () => {
  return (
    <div className="wrap">
      <img className="sea" src={Img} alt="" />
      <h1 className="texthome">
        MyBooks - читайте книги <br />
        по одной подписке
      </h1>

      <img className="logo" src={Img2} alt="" />

      <Link to="/books">
        <button
          className="button btn-outline-dark"
          style={{ position: "absolute", zIndex: 5 }}
        >
          Читать сейчас
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
