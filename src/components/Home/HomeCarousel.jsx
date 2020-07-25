import Carousel from "react-bootstrap/Carousel";
import CarouselOverlay from "./CarouselOverlay";
import React from "react";
import WelcomeImg from "./../../assets/studio-ghibli-theme-park.jpg";
import StudioG from "./../../assets/studiog.jpg";
import Classics from "./../../assets/classics.jpg";

const HomeCarousel = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={WelcomeImg} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text">Welcome to the Studio Ghibli Wiki Page</h3>
          <p>This is the best place to get information on Studio Ghibli</p>
        </Carousel.Caption>
        <CarouselOverlay />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={StudioG} alt="Second slide" />

        <Carousel.Caption>
          <h3>New Movie coming 2021</h3>
          <p>
            More information will be coming as we get close to the release date
            of the movie
          </p>
        </Carousel.Caption>
        <CarouselOverlay />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Classics} alt="Third slide" />

        <Carousel.Caption>
          <h3>Characters</h3>
          <p>Learn more about your favorite Studio Ghibli characters</p>
        </Carousel.Caption>
        <CarouselOverlay />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
