import React, { Component } from "react";

class PersonDesc extends Component {
  constructor() {
    super();
    this.state = {
      end: false,
      character: [{}],
    };
  }
  componentDidMount() {
    let arr = [];

    fetch(`${this.props.info.species}`)
      .then((res) => res.json())
      .then((obj) => {
        let person = {
          name: `${this.props.info.name}`,
          species: obj.name.toLowerCase(),
          eyes: `${this.props.info.eye_color}`.toLowerCase(),
          hair: `${this.props.info.hair_color}`.toLowerCase(),
          films: `${this.props.info.films.length}`,
        };
        arr.push(person);
        this.setState({
          character: arr
        });
      });
  }

  render() {
    const species = this.state.character.map((desc) => (
      <>
        is a {desc.species} with {desc.eyes} eyes and{" "}
        {`${desc.hair}`.includes("bald")
          ? `is ${desc.hair}.`
          : `has ${desc.hair} hair.`}{" "}
        {desc.name} has appeared in {desc.films} film(s).
      </>
    ));

    return <>{species}</>;
  }
}
export default PersonDesc;
