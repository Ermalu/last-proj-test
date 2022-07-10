import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, ListItem, Typography } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";
import styles from "./Details.module.css";
import Video from "./video/vid.details.mp4";

const Details = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct } = useContext(productsContext);
  useEffect(() => {
    getOneProduct(id);
  }, []);

  return oneProduct ? (
    <div style={{ height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}>
        <source src={Video} />
      </video>
      <Container>
        <Box className={styles.details}>
          <Typography variant="h4">{oneProduct.title}</Typography>
          <Typography variant="h5">{oneProduct.description}</Typography>
          <Typography variant="h4">{oneProduct.price}</Typography>
          <img
            style={{ borderRadius: "10px" }}
            src={oneProduct.image}
            width="30%"
            alt="product"
          />
        </Box>
      </Container>
    </div>
  ) : (
    <Loader />
  );
};

export default Details;
