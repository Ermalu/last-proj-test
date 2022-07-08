import React from "react";
import Video from "../images/Home.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div>
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

        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#f06292",
          }}>
          Первый Candy-Shop в Бишкеке!
        </h1>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}

          // width: "500px",
          // height: "500px",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        >
          <Carousel style={{ width: "500px" }}>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1-81olored-candies-on-pastel-pink-background-royalty-free-image-1644956455.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3> Мармеладные червячки</h3>
                  <p>
                    Их производство было начато в Германии. В 1920 году Ханс
                    Ригель старший, владелец кондитерской фабрики в Бонне,
                    основал компанию Haribo, а в 1922 году придумал мармеладных
                    червячки.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2014_40/695336/141001-halloween-candy-corn-1700.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3>Мармелад</h3>
                  <p>
                    Мармела́д — кулинарный продукт, приготовленный из фруктовых,
                    ягодных пюре или соков, варёных с сахаром с содержанием
                    влаги по массе не более 22 % (жевательный) — 33 %
                    (фруктово-ягодный и желейный)
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "400px" }}
                className="d-block w-100"
                src="https://images.everydayhealth.com/images/what-candy-can-people-with-diabetes-eat-and-how-much-is-safe-722x406.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div style={{ color: "black" }}>
                  <h3>M&Ms</h3>
                  <p>
                    M&M’s (исторически верное произношение: «Эм-эн-Эмс»[1][2]) —
                    шоколадное драже, выпускаемое фирмой Mars LLC. Впервые
                    появилось в США в 1941 году и сейчас продаётся более чем в
                    100 странах.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Box>
      </div>
    </div>
  );
};

export default Home;
