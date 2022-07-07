import React from "react";
import Video from "../images/Home.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <div>
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
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}>
          <source src={Video} />
        </video>

        <h1>Первый Candy-Shop в Бишкеке!</h1>
        <Carousel
          style={{
            width: "500px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1-81olored-candies-on-pastel-pink-background-royalty-free-image-1644956455.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2014_40/695336/141001-halloween-candy-corn-1700.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.everydayhealth.com/images/what-candy-can-people-with-diabetes-eat-and-how-much-is-safe-722x406.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
