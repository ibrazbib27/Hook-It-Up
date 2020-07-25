import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "isomorphic-fetch";
import "es6-promise";

const Characters = () => {
  let eachEnemy = (enemArr) => {
    let enemy = "";
    for (let i = 0; i < enemArr.length; i++) {
      if (i < enemArr.length - 1) enemy += enemArr[i] + ", ";
      else enemy += enemArr[i];
    }
    return enemy;
  };
  const [charcters, setCharacters] = useState([]);
  const getCharacters = async () => {
    let res = await fetch(
      "https://last-airbender-api.herokuapp.com/api/v1/characters"
    );
    let json = await res.json();
    setCharacters(json);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <React.Fragment>
      {charcters.map((character) => (
        <Row
          id={character._id}
          key={character._id}
          className="text-left p-3 mx-2 border-secondary border mb-5"
        >
          <Col xs={12} md={4}>
            {" "}
            <Image
              className=" bg-white"
              src={character.photoUrl}
              height={"200"}
              width={"200"}
              rounded
            />
          </Col>
          <Col xs={12} md={8}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>Name:</b> {character.name}
              </li>
              <li>
                <b>Id:</b> {character._id}
              </li>
              <li>
                <b>Affiliation:</b> {character.affiliation}
              </li>
              <li>
                <b>Allies:</b>{" "}
                {character.allies[0].includes(" ")
                  ? character.allies[0].replace(/ /g, ", ")
                  : character.allies[0]}
              </li>
              <li>
                <b>Enemies:</b>{" "}
                {character.enemies.length > 0
                  ? eachEnemy(character.enemies)
                  : "N/A"}
              </li>
            </ul>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default Characters;
