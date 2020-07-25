import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "isomorphic-fetch";
import "es6-promise";

const CharacterDetails = ({ match }) => {
  let params = match.params;
  let myCharacters = (charArr) => {
    let charc = "";
    for (let i = 0; i < charArr.length; i++) {
      if (i < charArr.length - 1) charc += charArr[i] + ", ";
      else charc += charArr[i];
    }
    return charc;
  };
  const [charcters, setCharacters] = useState([]);
  const getCharacters = async () => {
    console.log(`${params.id}`);
    let res = await fetch(
      `https://last-airbender-api.herokuapp.com/api/v1/characters/${params.id}`
    );
    let json = await res.json();
    setCharacters([json]);
  };
  useEffect(() => {
    getCharacters();
  });
  return (
    <React.Fragment>
      {charcters.map((character) => (
        <Row
          id={character._id}
          key={character._id}
          className="text-left p-3 mx-2 border-secondary border"
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
              <br />
              <li>
                <b>Id:</b> {character._id}
              </li>
              <br />
              <li>
                <b>Affiliation:</b> {character.affiliation}
              </li>
              <br />
              <li>
                <b>Gender:</b> {character.gender}
              </li>
              <br />
              {character.love !== undefined ? (
                <>
                  <li>
                    <b>Love:</b> {character.love}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.eye !== undefined ? (
                <>
                  <li>
                    <b>Eye:</b> {character.eye}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.hair !== undefined ? (
                <>
                  <li>
                    <b>Hair:</b> {character.hair}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.skin !== undefined ? (
                <>
                  <li>
                    <b>Skin:</b> {character.skin}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.weapon !== undefined ? (
                <>
                  <li>
                    <b>Weapon:</b> {character.weapon}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.predecessor !== undefined ? (
                <>
                  <li>
                    <b>Predecessor:</b> {character.predecessor}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.profession !== undefined ? (
                <>
                  {" "}
                  <li>
                    <b>Profession:</b> {character.profession}
                  </li>
                  <br />
                </>
              ) : null}
              {character.position !== undefined ? (
                <>
                  {" "}
                  <li>
                    <b>Position:</b> {character.position}
                  </li>
                  <br />
                </>
              ) : null}
              {character.first !== undefined ? (
                <>
                  {" "}
                  <li>
                    <b>Debut:</b> {character.first}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.weapon !== undefined ? (
                <>
                  <li>
                    <b>Weapon:</b> {character.weapon}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              {character.predecessor !== undefined ? (
                <>
                  <li>
                    <b>Predecessor:</b> {character.predecessor}
                  </li>{" "}
                  <br />
                </>
              ) : null}
              <li>
                <b>Allies:</b>{" "}
                {character.allies.length > 0
                  ? myCharacters(character.allies)
                  : "N/A"}
              </li>{" "}
              <br />
              <li>
                <b>Enemies:</b>{" "}
                {character.enemies.length > 0
                  ? myCharacters(character.enemies)
                  : "N/A"}
              </li>
            </ul>
          </Col>
        </Row>
      ))}
    </React.Fragment>
  );
};

export default CharacterDetails;
