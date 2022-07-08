import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import styles from "./AddProduct.module.css";
import Video from "./img/video.mp4";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const theme = createTheme({
    typography: {
      fontFamily: ["M PLUS 1 Code"].join(","),
    },
  });

  function handleSave() {
    const newProduct = {
      title,
      description,
      price,
      image,
    };
    if (!title.trim() || !description.trim("") || !price || !image.trim()) {
      alert("Заполни поля!!!");
    } else {
      createProduct(newProduct);
      navigate("/products");
    }
  }

  return (
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            fontFamily: "Raleway",
          }}></Box>

        <Container maxWidth="sm">
          <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
            <Typography className={styles.item} variant="h4">
              Add product
            </Typography>
            <TextField
              className={styles.inp}
              label="Title"
              variant="outlined"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <TextField
              className={styles.inp}
              type="number"
              label="Price"
              variant="outlined"
              value={price}
              onChange={e => setPrice(+e.target.value)}
            />
            <TextField
              className={styles.inp}
              label="Description"
              variant="outlined"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <TextField
              className={styles.inp}
              label="Image"
              variant="outlined"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
            <Button
              className={styles.inp}
              onClick={handleSave}
              variant="contained"
              style={{
                backgroundColor: "#f06292",
              }}>
              Save
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddProduct;
