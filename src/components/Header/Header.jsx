import { Container } from "@mui/system";

import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const navigate = useNavigate();
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
        <p
          onClick={() => {
            navigate("/products");
          }}>
          Procucts
        </p>

        <p
          onClick={() => {
            navigate("/add-product");
          }}>
          Add Procucts
        </p>
        <ShoppingCartIcon
          onClick={() => {
            navigate("/cart");
          }}
        />
      </div>
    </Container>
  );
};

export default Header;
