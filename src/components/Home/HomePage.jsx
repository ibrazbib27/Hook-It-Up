import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";
import HomeCarousel from "./HomeCarousel";

class HomePage extends Component {
  render() {
    return <HomeCarousel />;
  }
}
export default HomePage;
