import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Pagination,
  Slider,
  TextField,
} from "@mui/material";

import { productsContext } from "../../contexts/productsContext";
import ProductCard from "../ProductCard/ProductCard";
import { useSearchParams } from "react-router-dom";
import Video from "../images/candy.mp4";

const ProductsList = () => {
  const { products, getProducts, pages } = useContext(productsContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  const [currentPage, setCurrentPage] = useState(
    searchParams.get("_page") ? +searchParams.get("_page") : 1
  );

  const [price, setPrice] = useState([0, 10000]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _page: currentPage,
      _limit: 2,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [search, currentPage, price]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <Container style={{ height: "100vh", marginBottom: "50px" }}>
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
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}>
        <source src={Video} />
      </video>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <TextField
          value={search}
          color={"secondary"}
          label="Search"
          onChange={e => setSearch(e.target.value)}
          variant="outlined"
        />

        <Slider
          style={{ marginTop: "100px" }}
          color={"secondary"}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => {
            setPrice(value);
          }}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
          step={100}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          // marginTop: "50px",
        }}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          // marginTop: "100px",
        }}>
        <Pagination
          onChange={(event, page) => {
            setCurrentPage(page);
          }}
          page={currentPage}
          count={pages}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
