import { Button, Container, Box } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useNavigate } from "react-router-dom";
import styles from "./Purchase.module.css";
import Video from "./video/vid.buy.mp4";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = e => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
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
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <Container className={styles.form} maxWidth="sm">
            <Box className={styles.form}>
              <input
                style={{ opacity: "60%" }}
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                style={{ opacity: "60%" }}
                type="tel"
                name="name"
                placeholder="name"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                style={{ opacity: "60%" }}
                type="cvc"
                name="cvc"
                placeholder="cvc"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <input
                style={{ opacity: "60%" }}
                type="tel"
                name="expiry"
                placeholder="valid thru"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <Button
                variant="contained"
                color="success"
                style={{
                  backgroundColor: "#f06292",
                }}>
                Success
              </Button>
            </Box>
          </Container>
        </form>
      </div>
    );
  }
}
