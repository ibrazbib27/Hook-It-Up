import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Logo from "./../assets/logo.png";
import ReturnFilms from "./People/ReturnFilms";

const Aside = (props) => {
  let appendYears = false;
  let getAge = new RegExp(/^\d+$/);
  if (props.render === false) appendYears = getAge.test(props.info.age);
  return (
    <aside className="text-center border border-secondary p-2">
      <p style={{ fontFamily: "cursive" }} className="h4 mt-2">
        {props.render ? props.info.title : props.info.name}
      </p>
      <Image src={Logo} fluid className="bg-primary w-100" />
      <section style={{ lineHeight: "2" }} className="mt-4 small">
        <Row>
          <Col xs={2}>
            <b>{props.render ? "Director:" : "Age:"}</b>
          </Col>{" "}
          <Col xs={10}>
            {props.render ? props.info.director : props.info.age}{" "}
            {appendYears ? " years old" : null}
          </Col>
          <Col xs={2}>
            <b>{props.render ? "Producer:" : "Eyes:"}</b>
          </Col>{" "}
          <Col xs={10}>
            {props.render ? props.info.producer : props.info.eye_color}
          </Col>
          <Col xs={2}>
            <b>{props.render ? "Rating:" : "Gender:"}</b>
          </Col>{" "}
          <Col xs={10}>
            {props.render ? props.info.rt_score : props.info.gender}
            {props.render ? "%" : null}
          </Col>
          <Col xs={2}>
            <b>{props.render ? "Year:" : "Hair:"}</b>
          </Col>{" "}
          <Col xs={10}>
            {props.render ? props.info.release_date : props.info.hair_color}
          </Col>
          {props.render ? null : <ReturnFilms movie={props.info} />}
        </Row>
      </section>
    </aside>
  );
};

export default Aside;
