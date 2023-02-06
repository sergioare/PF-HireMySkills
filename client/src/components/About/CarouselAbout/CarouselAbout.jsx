import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../../assets/carousel1.jpg";
import carousel2 from "../../../assets/carousel2.jpg";
import carousel3 from "../../../assets/carousel3.jpg";

const CarouselAbout = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="First slide"
          style={{ height: "60vh" }}
        />
        {/* <Carousel.Caption>
          <h3 style={{ color: "black", background: "white" }}>
            First slide label
          </h3>
          <p style={{ color: "black", background: "white" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel2}
          alt="Second slide"
          style={{ height: "60vh" }}
        />

        {/* <Carousel.Caption>
          <h3 style={{ color: "black", background: "white" }}>
            Second slide label
          </h3>
          <p style={{ color: "black", background: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel3}
          alt="Third slide"
          style={{ height: "60vh" }}
        />

        {/* <Carousel.Caption>
          <h3 style={{ color: "black", background: "white" }}>
            Third slide label
          </h3>
          <p style={{ color: "black", background: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselAbout;
