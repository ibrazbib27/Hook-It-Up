import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import Logo from "./../logo.png";
import JPG from "./../avatar.jpeg";
import Characters from "./Characters";
import CharacterDetails from "./CharacterDetails";
import Footer from "./Footer";

const styles = {
  backgroundImage: `url(${JPG}) , linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))`,
  backgroundBlendMode: `overlay`,
  backgroundPosition: `center`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  backgroundAttachment: `fixed`,
};
const AvatarHome = () => {
  return (
    <React.Fragment>
      <Router>
        <Fragment>
          <Navbar
            className="pt-1"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            fixed="top"
          >
            <Row className="w-25">
              <Navbar.Brand className="ml-3 mr-auto ">
                <Col>
                  {" "}
                  <Image
                    className=" bg-white"
                    src={Logo}
                    height={"50"}
                    width={"100"}
                    rounded
                  />
                </Col>
                <Col className="mt-2">
                  Avatar The Last Airbender Characters{" "}
                </Col>
              </Navbar.Brand>
            </Row>
            <Navbar.Toggle
              className="px-4 py-4 my-auto ml-2"
              aria-controls="responsive-navbar-nav"
            />

            <Navbar.Collapse
              className="mt-auto"
              id="responsive-navbar-nav"
            ></Navbar.Collapse>
          </Navbar>
          <Container style={styles} className=" p-0 m-0" fluid>
            <Row className="my-5"></Row>
            <Row className="my-5"></Row>
            <Row className="my-5"></Row>

            <Container className="rounded mx-auto w-75 py-3 bg-light" fluid>
              <Switch>
                <Route exact path="/" component={Characters} />
                <Route
                  key="details"
                  exact
                  path="/:id/details"
                  component={CharacterDetails}
                />
              </Switch>
            </Container>

            <Row className="my-5"></Row>
            <Row className="my-5"></Row>
            <Row className="my-5"></Row>
            <Row className="my-5"></Row>
            <Row className="my-5"></Row>

            <Footer />
          </Container>
        </Fragment>
      </Router>
    </React.Fragment>
  );
};

export default AvatarHome;
