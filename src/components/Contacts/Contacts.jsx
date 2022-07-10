
import { Container } from "@mui/material";
import React from "react";
import Image from "../images/contacts.jpeg";

const Contacts = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}>
        <img
          style={{
            position: "fixed",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
          src={Image}
        />

        <Container maxWidth="sm">
          +996(500)980015 - Эрмек <br></br>+996(703)566655 - Максат
        </Container>
      </div>
    </div>
  );

import React from "react";

const Contacts = () => {
  return <div>Контакты</div>;

};

export default Contacts;
