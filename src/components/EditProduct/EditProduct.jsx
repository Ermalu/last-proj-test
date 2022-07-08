import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Loader from "../Loader/Loader";
import Video from "./video/video.mp4";

const EditProduct = () => {
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);
  // console.log(oneProduct);

  function handleSave() {
    const editedProduct = {
      title,
      description,
      price,
      image,
    };
    // console.log(editedProduct);
    updateProduct(id, editedProduct);
    navigate("/products");
  }
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
      <Container maxWidth="sm">
        <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
          <Typography style={{ alignSelf: "center" }} variant="h4">
            Edit Product
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            type="number"
            label="Price"
            variant="outlined"
            value={price}
            onChange={e => setPrice(+e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <TextField
            label="Image"
            variant="outlined"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
          <Button
            style={{
              backgroundColor: "#f06292",
            }}
            onClick={handleSave}
            variant="contained">
            Save
          </Button>
        </Box>
      </Container>
    </div>
  ) : (
    <Loader />
  );
};

export default EditProduct;
