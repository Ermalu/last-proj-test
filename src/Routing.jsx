import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Contacts from "./components/Contacts/Contacts";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import Purchase from "./components/Purchase/Purchase";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/contacts" element={<Contacts />} />


      <Route path="/" element={<Home />} />
      <Route path="/purchase" element={<Purchase />} />

      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routing;
