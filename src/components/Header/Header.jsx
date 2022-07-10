import { Container, width } from "@mui/system";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "../images/logo.png";
import ImageProducts from "../images/Products.png";
import ImageAddProducts from "../images/addProducts.png";
import ImageCart from "../images/cart.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <p>
          <img
            onClick={() => {
              navigate("/");
            }}
            width={"100px"}
            src={Image}
            alt=""
          />
        </p>
        <p>
          <img
            // onClick={() => {

            //   navigate("/products");
            // }}
            onClick={
              location.pathname == "/products"
                ? null
                : () => navigate("/products")
            }
            width={"150px"}
            src={ImageAddProducts}
            alt=""
          />
        </p>

        <p>
          <img
            onClick={() => {
              navigate("/add-product");
            }}
            width={"150px"}
            src={ImageProducts}
            alt=""
          />
        </p>
        <p>
          <img
            onClick={() => {
              navigate("/cart");
            }}
            width={"50px"}
            src={ImageCart}
            alt=""
          />
        </p>
      </div>
    </Container>
  );
};

export default Header;
